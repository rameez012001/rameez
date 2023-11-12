import React, { useState } from 'react'
import './assets/css/header.css'

export default function Header(props) {
    let newDate = new Date();
    let date = {
        weekday:'short',
        month: 'short',
        day: 'numeric'
    }
    let day = newDate.toLocaleString('en-us',date)
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes().toString().padStart(2, '0');
    let time = `${hours}:${minutes}`;

    return (
        <header>
            <div>
                <h1 id='app'>{props.setAppName}</h1>
            </div>
            <div className='date-time'>
                <p>{day} {time}</p>
            </div>
        </header>
    )
}
