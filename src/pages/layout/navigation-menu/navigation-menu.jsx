import React, {useEffect, useState} from 'react';
import {ProfileInline} from "../profile-inline/profile-inline";
import "./navigation-menu.scss"
import {NavigationMenuService} from "../../../services/navigation-menu.service";
import i18next from "i18next";
import {useHistory} from "react-router-dom";
import {NavigationType} from "./navigation.type";

let loaded = false;

export const NavigationMenu = (props) => {
    // Объявление переменной состояния, которую мы назовём "count"
    const [navigationMenu, setNavigationMenu] = useState([]);
    const history = useHistory();

    const getMenu = event => {
        NavigationMenuService.getMainList()
            .then(res => {
                setNavigationMenu(res.data.data)

                console.log(res['data']['data'])
                //setState(state);
            })
            .catch(err => console.log(err));

        return true;
    }

    useEffect((event) => {
        loaded = !loaded ? getMenu() : loaded;
    }, []);

    const clickItem = (item) => {
        //console.log(item);
        history.push(item.route || '');
    }

    const getIconClass = (item) => {
        NavigationType[item.name](item);
        return item.icon || '';
    }

    return (
        <div className="layout-menu-container">
            <div className="menu-scroll-content">
                <ProfileInline></ProfileInline>

                <ul className="layout-menu layout-main-menu clearfix">
                    {navigationMenu.map((item, index) => {
                        return <li
                            key={item.id || index}
                            className="nav-item">
                            <a className="nav-item-link"
                               onClick={event => clickItem(item)}>
                                <i className={'fa fa-fw ' + getIconClass(item)}></i>
                                <span>{i18next.t(item.title)}</span>
                                <i className="fa fa-fw fa-angle-down menuitem-toggle-icon "></i>
                            </a>
                            <div className=" submenu-arrow "></div>
                        </li>
                    })}
                </ul>
            </div>
        </div>

    )
}
