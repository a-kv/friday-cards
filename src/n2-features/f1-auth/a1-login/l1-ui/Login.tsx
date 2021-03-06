import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import {NavLink, Redirect} from "react-router-dom";
import {profile, restore} from "../../../../n1-main/m1-ui/u2-routes/routes";
import {authMe, singIn} from "../l2-bll/LoginReducer";
import Input from "../../../../n1-main/m1-ui/u3-common/c3-input/Input";
import Button from '../../../../n1-main/m1-ui/u3-common/c2-button/Button';
import  '../../../../n1-main/m0-styles/login.scss'

export const Login = React.memo(()  => {

    useEffect(() => {
        dispatch(authMe())
    },[])

    const [email, setEmail] = useState<string>('anna@gmail.com')
    const [password, setPassword] = useState<string>('1234qwerasdf')
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const setEmailCallback = useCallback((e: ChangeEvent<HTMLInputElement>): void => setEmail(e.currentTarget.value), [setEmail]);
    const setPasswordCallback = useCallback((e: ChangeEvent<HTMLInputElement>): void => setPassword(e.currentTarget.value), [setPassword]);
    const setRememberMeCallback = useCallback((e: ChangeEvent<HTMLInputElement>): void => setRememberMe(e.currentTarget.checked), [setRememberMe]);

    const error = useSelector<AppStateType, string>(state => state.login.error)
    const loading = useSelector<AppStateType, boolean>(state => state.login.loading)
    const isAuth = useSelector<AppStateType, boolean>(state => state.login.isAuth)
    const value = useSelector<AppStateType, string>(state => state.login.value)
    const inputType = useSelector<AppStateType, string[]>(state => state.login.inputType)
    const buttonType = useSelector<AppStateType, string[]>(state => state.login.buttonType)
    const buttonName = useSelector<AppStateType, string>(state => state.login.buttonName)

    const dispatch = useDispatch();

    const signInCallback = useCallback(
        () => dispatch(singIn(email, password, rememberMe)),
        [email, password, rememberMe, dispatch]
    );

    if (isAuth) {
        return <Redirect to={profile}/>
    }
    const inputStyle = error !== '' ? 'errorLogin' : ''
    const buttonDisabled = loading
    return (

        <div className='loginForm'>
            <div className='errorText'>{error}</div>
            <div className='inputStyle'>
                Login <Input onChange={setEmailCallback} value={value} inputType={inputType[0]}/>
            </div>
            <div className='inputStyle'>
                Password <Input onChange={setPasswordCallback} value={value} inputType={inputType[1]}/>
            </div>
            <div>
                Remember me <Input onChange={setRememberMeCallback} value={value} inputType={inputType[2]}/>
            </div>
            <div>
                <NavLink to={restore}>Forgot password?</NavLink>
            </div>
            <Button buttonDisabled={buttonDisabled} onClick={signInCallback} loading={loading}
                    buttonType={error !== '' ? buttonType[1] : buttonType[0] } buttonName={buttonName}/>

        </div>
    )

})