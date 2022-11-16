import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppintment from './AvailableAppintment';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());

    return (
        <div>
            <AppointmentBanner
                selected={selected}
                setSelected={setSelected}
            />
            <AvailableAppintment
                selected={selected}
            />
        </div>
    );
};

export default Appointment;