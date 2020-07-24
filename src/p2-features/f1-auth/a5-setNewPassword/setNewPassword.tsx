import React from "react";
import s from './setNewPassword.module.css';
import {Input} from "../../../p1-main/m1-ui/u1-common/input/Input";
import {Button} from "../../../p1-main/m1-ui/u1-common/button/Button";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../p1-main/m2-bll/store";
import { NavLink } from "react-router-dom";
import {login} from "../../../p1-main/m1-ui/routes";


export const SetNewPassword = () => {

    const setNewPassword: any = useSelector<AppStateType>((state) => state.setNewPassword)

    const onClick = () => {

    }
    const onChange = () => {

    }

    return (
        <form className={s.regForm}>
            <Input
                inputType={setNewPassword.inputType[0]}
                inputPlaceholder={setNewPassword.inputPlaceholder[0]}
                value={setNewPassword.value}
                onChange={onChange}

            />
            <Input
                inputType={setNewPassword.inputType[0]}
                inputPlaceholder={setNewPassword.inputPlaceholder[0]}
                value={setNewPassword.value}
                onChange={onChange}

            />
            <NavLink to={login}><Button buttonTitle={setNewPassword.buttonTitle}/></NavLink>
        </form>
    )
}