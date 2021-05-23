import { createContext, useContext, useEffect, useState, ReactNode } from 'react'





export const GeneralContext = createContext();


export function GeneralProvider({ children }) {
    const [taskTime, setTasktime] = useState(0);
    const [restTime, setRestTime] = useState(0);
    const [openMenu, setopenMenu] = useState(false);
    useEffect(() => {
        setTasktime(0.1 * 60);
        setRestTime(0.05 * 60);

    }, []);

    return (
        <GeneralContext.Provider value={{
            taskTime,
            restTime,
            openMenu,
        }}>
            {children}
        </GeneralContext.Provider>

    );
}