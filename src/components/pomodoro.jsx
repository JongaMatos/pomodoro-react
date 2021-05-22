import React, { useState, useEffect } from 'react';

import play from '../assets/play.png';
import reset from '../assets/reset.png';
import sleep from '../assets/rest.png'
import pause from '../assets/pause.svg'
import './pomodoro.css';

function Pomodoro() {
    let countdownTimeout;
    const taskTime = 0.1 * 60;
    const restTime = 0.05 * 60;
    const [time, setTime] = useState(taskTime);
    const [running, setRunning] = useState(false);
    const [rest, setRest] = useState(false);
    const min = Math.floor(time / 60);
    const sec = time % 60;

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    useEffect(() => {
        if (running && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
        if (time === 0) {
            setRunning(false);
        }
        if (time === 0 && !rest)
            taskNotification();
        if (time === 0 && rest)
            restNotification();

    }, [running, time]);

    const handleResetTimer = () => {
        clearTimeout(countdownTimeout);
        setRest(false);
        setRunning(false);
        setTime(taskTime);
    }
    const handleStartPause = () => {
        clearTimeout(countdownTimeout);
        setRunning(!running)
    }
    const handleSleep = () => {
        clearTimeout(countdownTimeout);
        setRest(true);
        setRunning(true);
        setTime(restTime);
    }

    const whichBtn = () => {
        if (running && time > 0) {
            return (
                <button className='Btn' onClick={handleStartPause}>
                    <img className='Pause' src={pause} alt="pause" />
                </button>);
        }
        if (!running && time > 0) {
            return (
                <button className='Btn' onClick={handleStartPause}>
                    <img className="Play" src={play} alt="play" />
                </button>);
        }
        if (!running && time === 0 && !rest) {
            return (
                <button className='Btn' onClick={handleSleep} >
                    <img src={sleep} alt="Rest" />
                </button>);
        }
    }

    const resetBtn = () => {
        if (running || time !== taskTime || rest)
            return (<button className='Btn' onClick={handleResetTimer}>
                <img src={reset} alt="reset" />
            </button>)
    }

    const taskNotification = () => {
        if (Notification.permission === 'granted') {
            new Audio('/endpomo.wav').play();
            new Notification("Bora descansar.");
        }
    }
    const restNotification = () => {
        if (Notification.permission === 'granted') {
            new Audio('/endBreakout.mp3').play();
            new Notification("Acabou descanso.");
        }
    }

    return (


        < div className='Card' >
            <div className='Timer'>
                {min < 10 ? (`0${min}`) : (min)}:{sec < 10 ? (`0${sec}`) : (sec)}
            </div>

            <div className='TimerBtns'>
                {whichBtn()}
                {resetBtn()}
            </div>
        </div >
    )
}

export default Pomodoro;
