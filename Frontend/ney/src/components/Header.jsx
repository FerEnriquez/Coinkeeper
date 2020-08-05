import React from "react";
import { Link } from 'react-router-dom';
import logo from './icons/logo.png';

const Header = props => {
    const {menuState, setMenuState} = props;
    return (
    <header className="site-header">
        <div>
            <button 
            className={`menu-trigger ${menuState ? 'menu-close' : ''}`}
            onClick={() => setMenuState(!menuState)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <div className="brand-icon">
            <Link to="/">
                <div className="icon">
                    <img src={logo} alt="icon" />
                </div>
                <span>Proyecto Ney</span>
            </Link>
        </div>
    </header>
    );
};

export default Header;