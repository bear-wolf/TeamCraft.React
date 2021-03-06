import React, {useEffect, useState} from 'react';
import {SystemService} from "../../../services/system.service";
import {useHistory} from "react-router-dom";

export const Header = (props) => {
    // Объявление переменной состояния, которую мы назовём "count"
    const [state, setState] = useState({
        logoType: ''
    });
    const history = useHistory();

    useEffect((event) => {
        SystemService.getPreliminaryParams()
            .then(res => {
                setState({
                    logoType: res["data"]['data']['design']['logo_img']
                });
            })
            .catch((err) => {
                history.push('/sign-in');
            });

    }, [state.logoType]);

    return (
        <div className="topbar clearfix">
            <div className="topbar-left">
                <a onClick={event => history.push('/')}>
                    <img className="logo-type" src={state.logoType}/>
                </a>
            </div>
            <div className=" topbar-right">
                <a id="menu-button"
                   className="menu-button">
                    <i className="fa fa-angle-left">
                    </i>
                </a>
                <a id="topbar-menu-button"><i className="fa fa-bars"></i></a>
            </div>
        </div>
    )
}
