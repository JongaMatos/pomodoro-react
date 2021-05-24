import React, { useContext } from 'react';
import { BrowserView } from 'react-device-detect'

import { GeneralContext } from '../../context/generalContext';

import Return from '../../assets/Return.svg';
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
        restoreDeafultTime,
    } = useContext(GeneralContext);

    return (
        <div className='MenuCard'>
            <div className='MenuHead'>
                <button onClick={closeMenu}><img src={Return} alt="return" /></button>
                <h2>Configurações</h2>
            </div>

            <div className='Options'>
                <BrowserView>
                    <div className='Option'>
                        <input name='notification?' type="checkbox" checked={notificationOn} onChange={changeNotificationOn} />
                        <label htmlFor="notification?" onClick={changeNotificationOn}> Notificação</label>
                    </div>
                </BrowserView>

                <div className='Option'>
                    <input name='soundAlert?' type="checkbox" checked={soundAlert} onChange={changeAlert} />
                    <label htmlFor="soundAlert?" onClick={changeAlert}> Alerta Sonoro</label>
                </div>
                <div className='Times'>
                    <h3>Opções de duração:</h3>
                    <div className='Option'>
                        Duração da tarefa:{taskTime / 60} min.
                        <button onClick={increaseTaskTime}>+</button>
                        <button onClick={decreaseTaskTime}> — </button>
                    </div>
                    <div className='Option'>
                        Duração do descanso:{restTime / 60} min.
                        <button onClick={increaseRestTime}>+</button>
                        <button onClick={decreaseRestTime}> — </button>
                    </div>
                </div>
            </div>
            <div className='restoreDefaultTime'>
                <button onClick={restoreDeafultTime}>
                    Resturar padrão
                </button>
            </div>
        </div>
    )
}

export default Menu
