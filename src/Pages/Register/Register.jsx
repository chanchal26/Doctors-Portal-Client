import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContexts';


const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleRegister = data => {
        const { email, password } = data;
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then((res) => {
                        navigate('/')
                        console.log(res.user)
                    })
                    .catch(error => setError(error.message))
            })
            .catch(error =>
                setError(error.message)
            )

    }
    return (
        <div className='flex items-center justify-center my-32 '>
            <div className='w-96 p-7 shadow-xl'>
                <h2 className='text-4xl text-center my-4'>Register</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
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
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input {...register("password", {
                            required: "Password is required",
                            minLength: { value: 8, message: "Password Must be 6 Characters", },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z]).{8}/, message: "Password must be Strong" }
                        })} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <p className='text-lg font-semibold text-red-500'>{error}</p>
                    <input className='btn btn-neutral w-full my-4' type="submit" value="Register" />
                </form>
                <p>All-ready have an Account ? <Link className=' text-primary' to='/login' >Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;