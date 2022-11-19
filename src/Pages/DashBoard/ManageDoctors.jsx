import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal';
import Loading from '../../Shared/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const closeModal = () => {
        setDeletingDoctor(null);
    }
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/doctors`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = res.json();
                return data
            } catch (error) {

            }
        }
    });

    if (isLoading) {
        return <Loading />
    }

    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Successfully Deleted');
                    refetch();
                }
            })
    }

    return (
        <div>
            <h1 className='text-3xl mb-5 text-center'>My Appointment</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Speciality</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors && doctors?.map((doctor, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td><img className='w-12 rounded-full' src={doctor.image} alt="" /></td>
                                <td>{doctor.speciality}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>
                                    <label onClick={() => { setDeletingDoctor(doctor) }} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    title={`Are you sure ? you want to delete ${deletingDoctor.name} `}
                    message={`If you delete once.It can not be undone.`}
                    closeModal={closeModal}
                    handleDeleteDoctor={handleDeleteDoctor}
                    deletingDoctor={deletingDoctor}
                />
            }
        </div>
    );
};

export default ManageDoctors;