import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContexts';
import useToken from '../../Hooks/UseToken';

const Login = () => {

    const [loginUserEmail, setLoginUserEmail] = useState();
    const [token] = useToken(loginUserEmail);
    const [loginError, setLoginError] = useState();
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';
    if (token) {
        navigate(from, { replace: true });
    }

    const { signIn } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = data => {
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                setLoginUserEmail(email);
            })
            .catch(err => {
                console.log(err)
                setLoginError(err.message)
            })
    }
    return (
        <div className='flex items-center justify-center my-32 '>
            <div className='w-96 p-7 shadow-xl'>
                <h2 className='text-4xl text-center my-4'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Email Address</span>
                        </label>
                        <input
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password Must be 6 Characters' },
                        })} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        <label className="label">
                            <Link className="label-text text-primary">Forget Password ?</Link>
                        </label>
                    </div>
                    <p className='text-md font-semibold text-red-500'>{loginError?.slice(22, 36)}</p>
                    <input className='btn btn-neutral w-full my-4' type="submit" value="Login" />
                </form>
                <p>New to Doctors Portal ?<Link className='text-primary' to='/register' >Create an Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;