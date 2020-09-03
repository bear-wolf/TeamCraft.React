import React, {useEffect} from 'react';
import i18next from "i18next";
import './personal-user.scss';
import {PersonalData} from "../../components/personal-data/personal-data";

let loaded = false;

export const PersonalUser = (props) => {
    // Объявление переменной состояния, которую мы назовём "count"
    //const [navigationMenu, setNavigationMenu] = useState([]);

    // const getMenu = event => {
    //     NavigationMenuService.getMainList()
    //         .then(res => {
    //             setNavigationMenu(res.data.data)
    //
    //             console.log(res['data']['data'])
    //             //setState(state);
    //         })
    //         .catch(err => console.log(err));
    //
    //     return true;
    // }
    useEffect((event) => {
        loaded = !loaded ? true : loaded;
    }, []);

    const onsubmit = (event) => {
debugger
    }

    return (<div className="card no-margin personal-data-content content-panel">
            <div>
                <h1>{i18next.t('titleUserPage')}</h1>

                <div className="content-body">
                    <PersonalData
                        submit={onsubmit}
                        {...props}></PersonalData>
                </div>
            </div>
        </div>
    )
}
