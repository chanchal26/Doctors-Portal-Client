import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selected, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selected, 'PP');

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;
        const booking = {
            Treatment: treatment.name,
            Date: date,
            Time: slot,
            Name: name,
            Email: email,
            Phone: phone,
        }
        console.log(booking);
    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-6'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots && slots.map((slot, idx) => <option key={idx} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full " />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " />
                        <input type="submit" value="Submit" className='btn btn-neutral max-w-sm w-full' />
                    </form>
                </div>

            </div>
        </>
    );
};

export default BookingModal;