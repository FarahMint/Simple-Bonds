import React from 'react';
import {  NavLink } from 'react-router-dom';

const Nav =() => {
  return (
    <>
        <nav>
            <ul>
                <li><NavLink 
                strict to={'/'}
                 className="nav-link"
                 activeClassName="selected">bonds</NavLink></li>
                <li><NavLink strict to={'/investors'}  className="nav-link">investors</NavLink></li>
            </ul>
        </nav>
        <hr />
    </>
  );
}

export default Nav;
