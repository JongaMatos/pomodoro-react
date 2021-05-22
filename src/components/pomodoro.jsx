import React, { useState, useEffect } from 'react';
import './pomodoro.css';

function Pomodoro() {
    let countdownTimeout;
    const taskTime = 0.1 * 60;
    const [time, setTime] = useState(taskTime);
    const [running, setRunning] = useState(false);
    const [rest, setRest] = useState(false);
    const min = Math.floor(time / 60);
    const sec = time % 60;

    useEffect(() => {
        if (time > 0 && running) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }

    }, [running, time])

    return (


        < div className='Card' >
            <div className='Timer'>
                {min < 10 ? (`0${min}`) : (min)}:{sec < 10 ? (`0${sec}`) : (sec)}
            </div>
            <button onClick={() => { setRunning(!running) }}>X</button>
        </div >
    )
}

export default Pomodoro;
