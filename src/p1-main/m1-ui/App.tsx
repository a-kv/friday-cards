import React, { useState } from 'react';
import './App.css';
import {Header} from "./u2-header/Header";
import {Route} from 'react-router-dom'
import {Login} from "../../p2-features/f1-auth/a1-login/Login";
import {login, profile, registration, restore, setNewPassword} from "./routes";
import {Registration} from "../../p2-features/f1-auth/a2-register/Registration";
import {RestorePassword} from "../../p2-features/f1-auth/a3-removePassword/RestorePassword";
import {SetNewPassword} from "../../p2-features/f1-auth/a5-setNewPassword/setNewPassword";
import {Profile} from "../../p2-features/f1-auth/a4-profile/Profile";


export const App = () => {
    const [isHidden, setIsHidden] = useState(false);

    const handleClick = ():void => {
        setIsHidden(true);
    }
    return (
        <div className="App">
            <Header handleClick={handleClick}/>
            <Route path={login} component={Login} />
            <Route path={registration} component={Registration} />
            <Route path={restore} component={RestorePassword} />
            <Route path={setNewPassword} component={SetNewPassword} />
            <Route path={profile} component={Profile} />

            <div className='appText'>
                {!isHidden
                ? <span>you will remember everything</span>
                : ''
            }</div>

        </div>
    );
}

