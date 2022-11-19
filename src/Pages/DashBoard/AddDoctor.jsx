import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb;
    const navigate = useNavigate()
    const { data: specialities, isLoading } = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentSpeaciality`)
            const data = res.json();
            return data
        }
    });

    if (isLoading) {
        return <Loading />
    }



    const handleAddDoctor = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.data.url);
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.Speciality,
                        image: imgData.data.url
                    }

                    fetch('http://localhost:5000/doctors', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            toast.success(`${doctor.name} is added successfully.`)
                            navigate('/dashboard/manageDoctors')
                        })
                }
            })
    }

    return (
        <div>
            <h1 className='text-3xl mb-5 text-center'>Add A New Doctor</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)} className='w-96 p-7'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Full Name</span>
                    </label>
                    <input {...register("name", { required: true })} type="text" placeholder="Your Full Name" className="input input-bordered w-full max-w-xs" />
                    {errors.name?.type === 'required' && <p role="alert" className='text-red-500'>Full name is required</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Email Address</span>
                    </label>
                    <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    {errors.email?.type === 'required' && <p role="alert" className='text-red-500'>Email is required</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">speciality</span>
                    </label>
                    <select {...register("Speciality", { required: true })} className="select select-bordered w-full max-w-xs">
                        {
                            specialities?.map(speciality => <option key={speciality._id} value={speciality.name}>{speciality.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Photo</span>
                    </label>
                    <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    {errors.name?.type === 'required' && <p role="alert" className='text-red-500'>Photo is required</p>}
                </div>
                <input className='btn btn-neutral w-full my-4' type="submit" value="Add A Doctor" />
            </form>
        </div>
    );
};

export default AddDoctor;