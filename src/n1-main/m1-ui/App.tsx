import React, {useState} from 'react';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import {Login} from "../../n2-features/f1-auth/a1-login/l1-ui/Login";
import {Registration} from "../../n2-features/f1-auth/a2-registration/r1-ui/Registration";
import {Header} from "./u1-header/Header";
import {cards, login, packs, profile, registration, restore, screenSaver} from "./u2-routes/routes";
import {RestorePassword} from "../../n2-features/f1-auth/a3-restorePassword/res1-ui/RestorePassword";
import {Profile} from "../../n2-features/f1-auth/a4-profile/p1-ui/profile";
import {Cards} from "../../n2-features/а2-cards/c1-ui/Cards";
import {Packs} from "../../n2-features/f3-packs/p1-ui/Packs";
import {ScreenSaver} from "./u3-common/ScreenSaver";


const App = () => {


    return (
        <div className='App'>
            <HashRouter>
                <Header/>
                <Switch>
                    <Route path={login} component={Login}/>
                    <Route path={registration} component={Registration}/>
                    <Route path={restore} component={RestorePassword}/>
                    <Route path={profile} component={Profile}/>
                    <Route path={cards} component={Cards}/>
                    <Route path={packs} component={Packs}/>
                    <Route exact path={screenSaver} component={ScreenSaver}/>
                </Switch>
            </HashRouter>
        </div>


    );
}


export default App;
