import React from "react";
import {login, registration} from "../routes";
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';


type PropsType = {
    handleClick: () => void
}

export const Header = (props: PropsType) => {

 return <div className={s.header} >
     <NavLink to={login} onClick={props.handleClick}>Sing in</NavLink>
     <NavLink to={registration} onClick={props.handleClick}>Sing up</NavLink>
 </div>
}