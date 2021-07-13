import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                 Accueil
            </NavLink>
            <NavLink exact to="/news"  activeClassName="nav-active">
                News
            </NavLink>
            <NavLink exact to="/about" activeClassName="nav-active">
                A Propos
            </NavLink>
            
        </div>
    );
};

export default Navigation;