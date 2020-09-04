import React from 'react';
import {Header} from "./header/header";
import {NavigationMenu} from "./navigation-menu/navigation-menu";
import './layout.scss';
import GuardRoute from "../../guard/guard-route";
import {PersonalUser} from "../personal-user/personal-user";
import {Switch, Route} from "react-router-dom";
import {Contacts} from "../contacts/contacts";
import store from "../../store/store";
import {useSelector, useDispatch} from "react-redux";
import {setLanguage} from "../../store/actions/language";

export const LayOut = (props) => {
    // Объявление переменной состояния, которую мы назовём "count"
    // const [count, setCount] = useState(0);
    const state = store.getState();
    const dispatch = useDispatch();

    const language = useSelector(state => state.language, (item, previousItem) => {
        debugger
        console.log('old')
        console.log(previousItem)
        console.log('new')
        console.log(item)
        // if (item.length === previousItem.length) {
        //     console.log('Equal')
        //     return true
        // } else {
        //     console.log('Not Equal')
        //     return false
        // }
        return true;
    })

    // props.dispatch({ type: 'SetLanguage' })
    //dispatch(setLanguage('en'));

    return (
        <div className="layout-wrapper menu-layout-static">
            {/*<Counter {...props}></Counter>*/}
            <Header props={props}></Header>
            <NavigationMenu props={props}></NavigationMenu>

            {/*<div>*/}
            {/*    language {language}*/}
            {/*</div>*/}

            <div className="layout-main">
                <Route path="/personal-user" component={PersonalUser}/>
                <Route path="/contacts" component={Contacts}/>
                {props.children}
            </div>
        </div>
    );
}