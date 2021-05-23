import React from 'react'
import Pomodoro from './components/pomodoro'
import { GeneralProvider } from './context/generalContext'
function App() {
    return (
        // <div>
            <GeneralProvider>
                <Pomodoro />
            </GeneralProvider>
        // </div>
    )
}

export default App
