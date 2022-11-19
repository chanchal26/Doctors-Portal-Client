import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';


const CheckOutForm = ({ bookings }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const { price, email, patient, _id } = bookings;


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email,
                    },
                },
            },
        );

        if (confirmError) {
            setError(confirmError);
            return
        }
        if (paymentIntent.status === "succeeded") {

            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id,
            }
            fetch('http://localhost:5000/payments', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess("Congrats Your Payment is Completed.");
                        setTransactionId(paymentIntent.id);
                    }
                })
        };
        setProcessing(false);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-md mt-8' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-red-500'>{error?.message}</p>
            {
                success && <div>
                    <p className='text-green-500'>
                        {success}
                    </p>
                    <p>Your TransactionId is : <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckOutForm;