import React, { useContext } from 'react'
import { GeneralContext } from '../../context/generalContext'

import './menu.css'

function Menu() {
    const {
        taskTime,
        restTime,
        closeMenu,
        changeAlert,
        changeNotificationOn,
        notificationOn,
        soundAlert,
        increaseTaskTime,
        decreaseTaskTime,
        increaseRestTime,
        decreaseRestTime,
    } = useContext(GeneralContext);

    return (
        <div className='Card'>
            <div className='MenuHead'>
                <h2>Menu</h2>
                <button onClick={closeMenu}>close</button>
            </div>

            <div className='Options'>
                <div className='Option'>
                    <input name='notification?' type="checkbox" checked={notificationOn} onChange={changeNotificationOn} />
                    <label htmlFor="notification?"> Notificação</label>
                </div>
                <div className='Option'>
                    <input name='soundAlert?' type="checkbox" checked={soundAlert} onChange={changeAlert} />
                    <label htmlFor="soundAlert?"> Alerta Sonoro</label>
                </div>
                <div className='Times'>
                    <h3>Configurações de tempo:</h3>
                    <div className='Option'>
                        Duração da tarefa:{taskTime / 60} minutos
                        <button onClick={increaseTaskTime}>+</button>
                        <button onClick={decreaseTaskTime}> -- </button>
                    </div>
                    <div className='Option'>
                        Duração do descanso:{restTime / 60} minutos
                        <button onClick={increaseRestTime}>+</button>
                        <button onClick={decreaseRestTime}> -- </button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Menu
