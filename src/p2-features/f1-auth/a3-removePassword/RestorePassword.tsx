import React from "react";
import s from './RestorePassword.module.css';
import {Input} from "../../../p1-main/m1-ui/u1-common/input/Input";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../p1-main/m2-bll/store";
import {Button} from "../../../p1-main/m1-ui/u1-common/button/Button";
import {NavLink} from "react-router-dom";
import {login} from "../../../p1-main/m1-ui/routes";


export const RestorePassword = () => {

    const restore: any = useSelector<AppStateType>((state) => state.restore)

    const onChange = () => {

    }


    return <form className={s.restoreForm} >
            <Input inputType={restore.inputType[0]} inputPlaceholder={restore.inputPlaceholder[0]} onChange={onChange}/>
        <NavLink to={login}> <Button buttonTitle={restore.buttonTitle}/></NavLink>
        </form>

}