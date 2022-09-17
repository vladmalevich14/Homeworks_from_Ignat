import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            {/*// add NavLinks*/}
            <ul className={s.topMenu}>
                <li>
                    <a href="#" className={s.linkStyle}>Navigation&#9660;</a>
                    <ul className={s.subMenu}>
                        <li><NavLink to="/pre-junior" className={s.navlink}>PreJunior</NavLink></li>
                        <li><NavLink to="/junior" className={s.navlink}>Junior</NavLink></li>
                        <li><NavLink to="/junior-plus" className={s.navlink}>JuniorPlus</NavLink></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Header
