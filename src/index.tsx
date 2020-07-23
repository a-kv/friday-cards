import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './p1-main/m1-ui/App';
import {Provider} from 'react-redux';
import {HashRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import {store} from "./p1-main/m2-bll/store";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
    ,
    document.getElementById('root')
);

serviceWorker.unregister();
