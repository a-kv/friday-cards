import React from "react";
import s from './Button.module.css';

type PropsType = {
    buttonTitle: string
}

export const Button = (props: PropsType) => {
    return (
        <div><button className={s.buttonForm}>{props.buttonTitle}</button></div>

    )
}