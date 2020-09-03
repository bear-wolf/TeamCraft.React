import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.scss';
import './index.scss';
import {SignIn} from "./pages/sign-in/sign-in";
import {Localization} from "./utils/localization";
import {LayOut} from "./pages/layout/layout";
import {StorageService} from "./services/storage.service";
import NotFound from "./components/not-found/not-found";
import GuardRoute from "./guard/guard-route";
import {SignUp} from "./pages/sign-up/sign-up";
import {RemindPassword} from "./pages/remind-password/remind-password";
import Test from "./test";
import {PersonalUser} from "./pages/personal-user/personal-user";
import history from './handlers/history';

Localization.initI18();

const isAuthenticated = StorageService.getToken()
const isAnonymous = !isAuthenticated
// console.log('isAuthenticated', isAuthenticated);

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/sign-in" component={SignIn} appProps={{isAnonymous}}/>
            <Route path="/sign-up" component={SignUp} appProps={{isAnonymous}}/>
            <Route path="/remind-password" component={RemindPassword} appProps={{isAnonymous}}/>
            <Route exact path="/test" component={Test} />
            <GuardRoute path="/" component={LayOut} appProps={{isAuthenticated}} />

            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
