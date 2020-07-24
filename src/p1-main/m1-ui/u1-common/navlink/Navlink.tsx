import React from "react";
import {restore} from '../../routes';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';


type PropsType = {
    navTitle: string
    path: string
}

export const Navlink = (props: PropsType) => {

 return <div className={s.header} >
     <NavLink to={props.path} >{props.navTitle}</NavLink>
 </div>
}