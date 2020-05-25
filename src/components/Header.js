import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <nav>
            <NavLink to="/">Add new </NavLink>
            <NavLink to="/viewlist">View list</NavLink>
        </nav>
    );

}

export default Header;