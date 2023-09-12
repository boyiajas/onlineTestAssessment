import React, { useState } from "react";
import './Navbar.css';

export default function Navbar(){

    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
        setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return(
        <div className="main">
            <div className="container">
                <nav className="nav">
                    <a href="#" className="nav__brand">
                        Iconis
                    </a>
                    <ul className={active}>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                About us
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                How it Work
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                Contact
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                FAQ
                            </a>
                        </li>
                        
                            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=sFXvUdumR0OVaU3T--D5nAIklbJcpO1CuVp_BgMncx9UOFJETk5LMFJFWTJOWDM5STJYWVYzN0MzSi4u" className="nav__link register-btn btn">
                                Start Survey
                            </a>
                    
                    </ul>
                    <div onClick={navToggle} className={icon}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
            </div>
        </div>
    )
}