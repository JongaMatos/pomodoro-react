import React, { useContext } from 'react'

import { GeneralContext } from '../../context/generalContext'

import Pomodoro from '../../components/pomodoro/pomodoro'
import Menu from '../../components/menu/menu'

function HomePage() {
    const { menuIsOpen } = useContext(GeneralContext);
    return (
        <>
            {menuIsOpen ? (<Menu />) : (<Pomodoro />)}
        </>
    )
}

export default HomePage;
