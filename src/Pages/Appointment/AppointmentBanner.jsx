import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import bg from '../../assets/images/bg.png';


const AppointmentBanner = ({ selected, setSelected }) => {

    return (
        <div style={{ background: `url(${bg})` }} className="hero py-24">
            <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker
                        mode='single'
                        selected={selected}
                        onSelect={setSelected}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;