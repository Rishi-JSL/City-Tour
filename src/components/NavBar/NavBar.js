import React from 'react';
import './navbar.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


export default function NavBar() {

    const show = () => {
        const back  = document.querySelector(".nav__background");
        const nav = document.querySelector(".nav__navigation");

        back.classList.toggle("background__animation");
        nav.classList.toggle("nav__animation");
        
    };
    return (
        <div className="header">

            <div className="logo">
                <h1>City <span>Tour</span></h1>
            </div>
            
            <div className="nav">
                <div className="nav__background">
                
                </div>

                <div className="nav__burger" onClick={show}>
                    <i className="fas fa-bars"></i>
                </div>

                <div className="nav__navigation">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="{#}" className="nav__link">home</a></li>
                        <li className="nav__item"><a href="{#}" className="nav__link">about us</a></li>
                        <li className="nav__item"><a href="{#}" className="nav__link"><span>our tour</span></a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};
