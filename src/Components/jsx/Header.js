import React, { useState, useEffect } from 'react';

export default function Header(props) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    let date = {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    };
    let day = currentTime.toLocaleString('en-us', date);
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes().toString().padStart(2, '0');
    let time = `${hours}:${minutes}`;

    return (
        <header id='header'>
            <nav>
                <h1>{props.setAppName}</h1>
            </nav>
            <div className='date-time'>
                <p>{day} {time}</p>
            </div>
        </header>
    );
}
