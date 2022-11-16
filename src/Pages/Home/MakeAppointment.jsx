import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section
            style={{ background: `url(${appointment})` }}
            className="mb-20"
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-36 -mb-4 hidden md:block lg:block lg:w-1/2 rounded-lg" alt='' />
                    <div className='text-white'>
                        <h1 className='text-primary text-2xl font-bold pb-2'>Appointment</h1>
                        <h1 className="text-3xl font-semibold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"><Link to='/appointment'>Get Started</Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;