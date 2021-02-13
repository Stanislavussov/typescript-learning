import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Bars from './Bars.svg'
import s from "../Header.module.css";

type MenuProps = {
    menuStatus: boolean
    menuStatusHandler: (menuStatus: boolean) => void
}

export const Menu: React.FC<MenuProps> = ({menuStatus, menuStatusHandler}) => {

        const imgStyle = {
            width: 30,
            margin: 20
        }

        return (
            <div className={s.header}>
                <img onClick={() => menuStatusHandler(!menuStatus)} style={imgStyle} src={Bars} alt=""/>
                {menuStatus &&
                <ul>
                    <li><NavLink to="/pre-junior" activeClassName="selected">PRE JUNIOR</NavLink></li>
                    <li><NavLink to="/junior" activeClassName="selected">JUNIOR</NavLink></li>
                    <li><NavLink to="/junior-plus" activeClassName="selected">JUNIOR PLUS</NavLink></li>
                </ul>
                }
            </div>
        );
    }
;

export default Menu;
