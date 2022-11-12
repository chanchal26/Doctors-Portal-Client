import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const InfoCards = () => {
    return (
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white'>
            <div className="card card-side bg-gradient-to-r from-primary to-secondary shadow-xl px-5 py-4">
                <figure><img src={clock} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>9 AM to 10 PM Everyday.</p>
                </div>
            </div>
            <div className="card card-side bg-neutral shadow-xl px-5 py-4">
                <figure><img src={marker} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Visit our location</h2>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className="card card-side bg-gradient-to-r from-primary to-secondary shadow-xl px-5 py-4">
                <figure><img src={phone} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Contact us now</h2>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCards;