import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading';
import BookingModal from './BookingModal';


const AvailableAppintment = ({ selected }) => {
    const [treatment, setTreatment] = useState({});
    const date = format(selected, 'PP');
    const { data: options = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = res.json();
            return data
        }
    });

    if (isLoading) {
        return <Loading />
    }

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
                                <p>Price: ${option.price}</p>
                                <div className="card-actions justify-end">
                                    {/* <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Book Appointment</button> */}
                                    <label disabled={option.slots.length === 0} onClick={() => setTreatment(option)} htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Book Appointment</label>

                                </div>
                            </div>
                            {
                                treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} selected={selected} refetch={refetch} />
                            }
                        </div>

                    )
                }

            </div>
        </div>
    );
};

export default AvailableAppintment;