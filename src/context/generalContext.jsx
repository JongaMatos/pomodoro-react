import { createContext, useEffect, useState } from 'react'


export const GeneralContext = createContext();


export function GeneralProvider({ children }) {

    const [taskTime, setTaskTime] = useState();
    const [restTime, setRestTime] = useState();
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [soundAlert, setSoundAlert] = useState(true);
    const [notificationOn, setNotificationOn] = useState(true);

    useEffect(() => {
        restoreTime();


    }, []);
    const openMenu = () => {
        setMenuIsOpen(true);
    }
    const closeMenu = () => {
        setMenuIsOpen(false)
    }
    const changeAlert = () => {
        setSoundAlert(!soundAlert);
    }
    const changeNotificationOn = () => {
        setNotificationOn(!notificationOn);
    }

    const increaseTaskTime = () => {
        if (taskTime + 60 < 60 * 99) {
            setTaskTime(taskTime + 60);
            updateTaskTime();
        }
        else {
            console.log("AAAAAAAAAAAAAAAAAAAAAAAA");

            console.log({ 'suposto tempo': (taskTime + 60) / 60 });

        }
    }

    const decreaseTaskTime = () => {
        if (taskTime - 60 >= 60) {
            setTaskTime(taskTime - 60);
            updateTaskTime();
        }
    }

    const increaseRestTime = () => {
        if (restTime + 60 < 99 * 60) {
            setRestTime(restTime + 60);
            updateRestTime();
        }
    }

    const decreaseRestTime = () => {
        if (restTime - 60 >= 60) {
            setRestTime(restTime - 60);
            updateRestTime();
        }
    }

    const restoreTime = () => {
        const tt = parseInt(localStorage.getItem('taskTime'));
        if (tt) {
            setTaskTime(tt);
        }
        else {
            setTaskTime(60 * 0.1);
        }

        const rt = parseInt(localStorage.getItem('restTime'));
        if (rt) {
            setRestTime(rt);
        }
        else {
            setRestTime(60 * 0.1);
        }
    }

    const updateTaskTime = () => {
        localStorage.setItem('taskTime', taskTime);
    }
    const updateRestTime = () => {
        localStorage.setItem('restTime', restTime);
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
            restoreTime,
        }}>
            {children}
        </GeneralContext.Provider>

    );
}