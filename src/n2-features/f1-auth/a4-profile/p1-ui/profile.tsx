import React, {useEffect} from 'react';
import user from '../../../../n0-assets/ninja-background-512.png';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import {authMe} from "../../a1-login/l2-bll/LoginReducer";
import '../../../../n1-main/m0-styles/profile.scss';

export const Profile = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(authMe())
    },[])

    const login: any = useSelector<AppStateType>(state => state.login.userName)

    return (
        <div className='avatar'>
            {/*{login}<img alt='user' src={user}/>*/}
        </div>
    )
}

