import { createContext, useEffect, useState } from 'react'


export const GeneralContext = createContext();


export function GeneralProvider({ children }) {

    const [taskTime, setTaskTime] = useState();
    const [restTime, setRestTime] = useState();
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [soundAlert, setSoundAlert] = useState(true);
    const [notificationOn, setNotificationOn] = useState();

    useEffect(() => {
        restoreStatus();


    }, []);
    const openMenu = () => {
        setMenuIsOpen(true);
    }
    const closeMenu = () => {
        setMenuIsOpen(false)
    }
    const changeAlert = () => {
        if (soundAlert === true) {
            setSoundAlert(false);
            localStorage.setItem('soundAlert', false);
        }
        else {
            setSoundAlert(true);
            localStorage.setItem('soundAlert', true);
        }

    }
    const changeNotificationOn = () => {
        if (notificationOn === true) {
            setNotificationOn(false);
            localStorage.setItem('notificationOn', false);
        }
        else {
            setNotificationOn(true);
            localStorage.setItem('notificationOn', true);
        }


    }

    const increaseTaskTime = () => {
        if (taskTime + 60 < 60 * 99) {
            localStorage.setItem('taskTime', taskTime + 60);
            setTaskTime(taskTime + 60);

        }
    }

    const decreaseTaskTime = () => {
        if (taskTime - 60 >= 60) {
            localStorage.setItem('taskTime', taskTime - 60);
            setTaskTime(taskTime - 60);
        }
    }

    const increaseRestTime = () => {
        if (restTime + 60 < 99 * 60) {
            localStorage.setItem('restTime', restTime + 60);
            setRestTime(restTime + 60);
        }
    }

    const decreaseRestTime = () => {
        if (restTime - 60 >= 60) {
            localStorage.setItem('restTime', restTime - 60);
            setRestTime(restTime - 60);
        }
    }

    const restoreStatus = () => {
        //taskTime
        const tt = parseInt(localStorage.getItem('taskTime'));
        if (tt) {
            setTaskTime(tt);
        }
        else {
            setTaskTime(60 * 0.1);
        }
        //restTime
        const rt = parseInt(localStorage.getItem('restTime'));
        if (rt) {
            setRestTime(rt);
        }
        else {
            setRestTime(60 * 0.1);
        }
        //Notificação
        const nO = localStorage.getItem('notificationOn');
        if (nO) {
            setNotificationOn(nO === 'true');
        }
        else {
            setNotificationOn(true);
        }
        //Som
        const sA = localStorage.getItem('soundAlert');
        if (sA) {
            setSoundAlert(sA === 'true');
        }
        else {
            setSoundAlert(true);
        }
    }

    const restoreDeafultTime = () => {

    }

    return (
        <GeneralContext.Provider value={{
            taskTime,
            restTime,
            menuIsOpen,
            soundAlert,
            notificationOn,
            changeAlert,
            changeNotificationOn,
            openMenu,
            closeMenu,
            increaseTaskTime,
            decreaseTaskTime,
            increaseRestTime,
            decreaseRestTime,
            restoreStatus,
        }}>
            {children}
        </GeneralContext.Provider>

    );
}