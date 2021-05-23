import React, { useContext } from 'react'

import { GeneralContext } from '../../context/generalContext'

import Pomodoro from '../../components/pomodoro/pomodoro'
import Menu from '../../components/menu/menu'

function HomePage() {
    const { menuIsOpen, taskTime, restTime } = useContext(GeneralContext);
    const showPomodoro = () => {
        if (taskTime && restTime)
            return <Pomodoro />
        else
            return <p>Carregando</p>


    }
    return (
        <>
            {menuIsOpen ? (<Menu />) : (showPomodoro())}
        </>
    )
}

export default HomePage;
