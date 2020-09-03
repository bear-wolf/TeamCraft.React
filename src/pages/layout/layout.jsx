import React from 'react';
import {Header} from "./header/header";
import {NavigationMenu} from "./navigation-menu/navigation-menu";
import './layout.scss';
import GuardRoute from "../../guard/guard-route";
import {PersonalUser} from "../personal-user/personal-user";
import {Switch, Route} from "react-router-dom";
import {Contacts} from "../contacts/contacts";

export const LayOut = (props) => {
    // Объявление переменной состояния, которую мы назовём "count"
    // const [count, setCount] = useState(0);

    return (
        <div className="layout-wrapper menu-layout-static">
            <Header props={props}></Header>
            <NavigationMenu props={props}></NavigationMenu>

            <div className="layout-main">
                <Route path="/personal-user" component={PersonalUser}/>
                <Route path="/contacts" component={Contacts}/>
                {props.children}
            </div>
        </div>
    );
}