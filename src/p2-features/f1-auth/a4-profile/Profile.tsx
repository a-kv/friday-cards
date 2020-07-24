import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../p1-main/m2-bll/store";
import s from './Profile.module.css';




export const Profile = () => {

    const profile: any = useSelector<AppStateType>((state) => state.profile)

    const onClick = () => {

    }
    const onChange = () => {

    }

    return (
       <div className={s.profilePage}>your profile will be here </div>
    )
}