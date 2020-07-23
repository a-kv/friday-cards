import React, { useState } from 'react';
import './App.css';
import {Header} from "./u2-header/Header";
import {Route} from 'react-router-dom'
import {Login} from "../../p2-features/f1-auth/a1-login/Login";
import {login, registration} from "./routes";
import {Registration} from "../../p2-features/f1-auth/a2-register/Registration";


export const App = () => {
    const [isHidden, setIsHidden] = useState(true);

    const handleClick = ():void => {
        setIsHidden(false);
    }
    return (
        <div className="App">
            <Header handleClick={handleClick}/>
            <Route path={login} component={Login} />
            <Route path={registration} component={Registration} />

            <div className='appText'>
                {isHidden
                ? <span>you will remember everything</span>
                : ''
            }</div>

        </div>
    );
}

