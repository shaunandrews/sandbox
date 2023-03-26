import React from 'react';

// CSS
import './UpdateTime.scss';

function UpdateTime({ date }) {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString('default', { month: 'short' });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return (
        <div className="update-time">
            {`${month} ${day}, ${year}`} at {`${formattedHours}:${formattedMinutes} ${ampm}`}
        </div>
    );
}

export default UpdateTime;
