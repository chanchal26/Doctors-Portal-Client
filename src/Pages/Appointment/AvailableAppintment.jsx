import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';

const AvailableAppintment = ({ selected }) => {
    const [options, setOptions] = useState([]);
    const [treatment, setTreatment] = useState({});
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setOptions(data));
    }, [])
    return (
        <div className=' mx-auto my-20'>
            <p className='text-primary font-semibold text-md text-center'>Available Appointments on {format(selected, 'PP')}</p>
            <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32'>
                {
                    options.map(option =>
                        <div key={option._id} className="card w-96 shadow-xl py-6">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-primary">{option.name}</h2>
                                <p>{option.slots.length > 0 ? option.slots[0] : 'Try Another Day'}</p>
                                <p>{option.slots.length} {option.slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                                <div className="card-actions justify-end">
                                    {/* <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Book Appointment</button> */}
                                    <label disabled={option.slots.length === 0} onClick={() => setTreatment(option)} htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Book Appointment</label>

                                </div>
                            </div>
                            <BookingModal treatment={treatment} setTreatment={setTreatment} selected={selected} />
                        </div>

                    )
                }

            </div>
        </div>
    );
};

export default AvailableAppintment;