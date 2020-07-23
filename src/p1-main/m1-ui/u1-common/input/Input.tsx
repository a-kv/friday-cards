import React from "react";
import s from './Input.module.css';

type PropsType = {
    inputType: string
    inputPlaceholder: string
    onChange: () => void
    value?: string

}

export const Input = (props: PropsType) => {
    return (
        <div className={s.inputForm}>
            <input
                type={props.inputType}
                placeholder={props.inputPlaceholder}/>
        </div>

    )
}