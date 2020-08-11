import React from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {login, packs, registration} from "../u2-routes/routes";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../m2-bll/store";
import {logOut} from '../../../n2-features/f1-auth/a1-login/l2-bll/LoginReducer';
import Button from "../u3-common/c2-button/Button";
import '../../m0-styles/header.scss';
import user from "../../../n0-assets/samuraii.jpg";

export const Header = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const onClickLogout = () => {
        dispatch(logOut())
        history.push(login)
    }
    const loginName: any = useSelector<AppStateType>(state => state.login.userName)
    const loginState: any = useSelector<AppStateType>(state => state.login)

    return (<div className='header'>
            {loginState.isAuth === false
                ?
                <div>
                    <NavLink to={login}>Sign in</NavLink> |
                    <NavLink to={registration}>Sign up</NavLink>
                </div>
                :
                <div className='headerMenu'>
                    <div>
                        <NavLink className='packBtn' to={packs}>
                            <Button buttonName={'Show user packs'} buttonType={'light'} loading={false} onClick={() => {
                            }} buttonDisabled={false}/>
                        </NavLink>
                    </div>
                    <div>
                        <Button buttonName={'Log out'} buttonType={'primary'} loading={false} onClick={onClickLogout}
                                buttonDisabled={false}/>
                        <div className='avatar'>
                            {loginName}<img alt='user' src={user}/>
                        </div>
                    </div>

                    {/*<NavLink to={packs}>*/}
                    {/*    <Button buttonName={'Show all packs'} buttonType={'light'} loading={false} onClick={()=>{}} buttonDisabled={false}/>*/}
                    {/*</NavLink>*/}
                </div>

            }

        </div>

    )
}

