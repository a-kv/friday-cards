import React from "react";
import s from './Login.module.css';
import {Input} from "../../../p1-main/m1-ui/u1-common/input/Input";
import {Button} from "../../../p1-main/m1-ui/u1-common/button/Button";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../p1-main/m2-bll/store";


type PropsType = {
    onClick: () => void
    onChange: () => void
    value?: string

}

export const Login = (props: PropsType) => {
    const login: any = useSelector<AppStateType>(state => state.login)

    const onClick = () => {

    }
    const onChange = () => {

    }


    return (
        <form className={s.loginForm}>
            <Input
                inputType={login.inputType[0]}
                inputPlaceholder={login.inputPlaceholder[0]}
                value={login.value}
                onChange={onChange}

        />
            <Input
                inputType={login.inputType[1]}
                inputPlaceholder={login.inputPlaceholder[1]}
                value={login.value}
                onChange={onChange}


            />
            <div className={s.forgetPassword}>Forget password</div>
            <Button buttonTitle='Log in'/>
        </form>
    )
}