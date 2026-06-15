import React from 'react';
import logo from "../assets/logo.png";
import { useState,useEffect } from 'react'; 

const Header = () => {

    // const [theme,setTheme] = useState(JSON.parse(localStorage.getItem('theme')) ||'light');


    const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? JSON.parse(saved) : "light";
    });


    
    useEffect(()=>{
        document.documentElement.removeAttribute('class');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme',JSON.stringify(theme));
    },[theme]);

    return (
        <header>
            <span className="logo">
                <img src={logo} alt="" />
                <span>TaskMate</span>
            </span>
            <span className="themeSelector">
                <span onClick={() => setTheme("light")} className={ theme === "light" ? "light activeTheme" : "light"}></span>
                <span onClick={() => setTheme("medium")} className={ theme === "medium" ? "medium activeTheme" : "medium"}></span>
                <span onClick={() => setTheme("dark")} className={ theme === "dark" ? "dark activeTheme" : "dark"}></span>
                <span onClick={() => setTheme("gOne")} className={ theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
                <span onClick={() => setTheme("gTwo")} className={ theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
                <span onClick={() => setTheme("gThree")} className={ theme === "gThree" ? "gThree activeTheme" : "gThree"}></span>
            </span>
        </header>
    )
}

export default Header;
