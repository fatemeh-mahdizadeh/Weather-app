
import { useState, useEffect } from "react";

function DarkMode() {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        const locTeme = window.localStorage.getItem('darkMode')
        if (locTeme) {
            setDark(locTeme)

        }
    },[])
    const changeTheme = () => {
        if (dark) {
            setDark(false)
            console.log('dark');
            window.localStorage.setItem('darkMode', false)


        } else {
            setDark(true)
            console.log('light');
            window.localStorage.setItem('darkMode', true)


        }
    }
    return[dark,changeTheme]



}

export default DarkMode;