import { createContext, useState } from 'react';

// create the conetxt
export const GlobalContext = createContext(null)

// create global state that recipe component as children

function GlobalState({ children }) {

    const [theme, setTheme] = useState('light')
    
    function handleThemeButton() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    
    return (
        <GlobalContext.Provider value={{ theme, handleThemeButton }}>{children}</GlobalContext.Provider>
    )
}

export default GlobalState 