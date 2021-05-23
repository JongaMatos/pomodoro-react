import { createContext, useEffect, useState } from 'react'


export const GeneralContext = createContext();


export function GeneralProvider({ children }) {

    const [taskTime, setTaskTime] = useState(0.1 * 60);
    const [restTime, setRestTime] = useState(0.05 * 60);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [soundAlert, setSoundAlert] = useState(true);
    const [notificationOn, setNotificationOn] = useState(true);

    useEffect(() => {
        setTaskTime(0.1 * 60);
        setRestTime(0.05 * 60);

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

    const increaseTaskTime = () => { setTaskTime(taskTime + 60); }
    const decreaseTaskTime = () => { setTaskTime(taskTime - 60) }

    const increaseRestTime = () => { setRestTime(taskTime + 60); }
    const decreaseRestTime = () => { setRestTime(taskTime - 60) }

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


        }}>
            {children}
        </GeneralContext.Provider>

    );
}