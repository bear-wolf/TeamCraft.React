import React, {useEffect, useState} from 'react';
import i18next from "i18next";
import {useHistory} from "react-router-dom";
import {StorageService} from "../../../services/storage.service";

export const ProfileInline = (props) => {
    const history = useHistory();

    const logOut = () => {
        StorageService.removeToken();
        StorageService.removeAuth();
        console.log('logOut');
        history.push('/sign-in');
    }

    return (<div className="profile">
        <a className="">
            <span className="profile-name"></span>
            {/*<span className="profile-role">*/}
            {/*    <span>{i18next.t('Portfolio:')}</span>*/}
            {/*    <span>role</span>*/}
            {/*</span>*/}
        </a>

        <ul className="layout-menu">
            <li className="" role="menuitem">
                <a onClick={logOut}>
                    <i className="fa fa-fw fa-sign-out"></i>
                    <span className="">{i18next.t('ProfileMenuExit')}</span>
                </a>
                <div className="layout-menu-tooltip">
                    <div className="layout-menu-tooltip-arrow"></div>
                    <div className="layout-menu-tooltip-text">{i18next.t('Logout')}</div>
                    i18next.t('formTitleEmail')            </div>
            </li>
        </ul>
    </div>
)
}