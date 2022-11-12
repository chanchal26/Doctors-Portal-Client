import React from 'react';
import appointment from '../../assets/images/appointment.png'

const Contact = () => {
    return (


        <div style={{ background: `url(${appointment})` }}>
            <div className='pt-5  text-center'>
                <h4 className='text-primary text-xl font-bold'>Contact Us</h4>
                <h2 className='text-2xl font-semibold text-white'>Stay connected with us</h2>
            </div>
            <form className="space-y-4 py-10 ">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-1/2 mx-auto">
                    <div>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                            placeholder="Email address"
                            type="email"
                            id="email"
                        />
                    </div>

                    <div>
                        <label className="sr-only" htmlFor="phone">Subjects</label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                            placeholder="Subjects"
                            type="tel"
                            id="subjects"
                        />
                    </div>
                </div>

                <div className='w-1/2 mx-auto'>
                    <label className="sr-only" htmlFor="message">Your Message</label>
                    <textarea
                        className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                        placeholder="Your Message"
                        rows="8"
                        id="message"
                    ></textarea>
                </div>
                <button type='submit' className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white flex  mx-auto">Submit</button>

            </form>
        </div>

    );
};

export default Contact;