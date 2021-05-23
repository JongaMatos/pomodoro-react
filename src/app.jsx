import React from 'react'
import HomePage from './pages/homePage'
import { GeneralProvider } from './context/generalContext'
function App() {
    return (
            <GeneralProvider>
                <HomePage></HomePage>
            </GeneralProvider>
    )
}

export default App
