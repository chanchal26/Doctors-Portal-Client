import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckOutForm from './CheckOutForm';
import { useNavigation } from 'react-day-picker';
import Loading from '../../Shared/Loading';


const stripePromise = loadStripe('pk_test_51M5wiaIrVzbm0HMvaqozjgplhudouPO0dY32CvJa0XhGHtfCcpPnRHkaz0ad6SH8G6XMXpipMHdo2AlSzqQiSGHM000hLx1eTn');


const Payment = () => {
    const bookings = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading />
    }
    return (
        <div>
            <h1 className='text-3xl mb-5 text-center'>Payment For {bookings.treatment}</h1>
            <p className='text-center'>Please Pay <strong>${bookings.price}</strong> for your appointment on {bookings.appointmentDate} at {bookings.slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        bookings={bookings}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;