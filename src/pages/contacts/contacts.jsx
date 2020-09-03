import React, {useEffect, useState} from 'react';
import i18next from "i18next";
import {EntityService} from "../../services/entity.service";

let loaded = false;

export const Contacts = (props) => {
    // Объявление переменной состояния, которую мы назовём "count"
    const [content, setContent] = useState('');

    useEffect((event) => {
        loaded = !loaded ? getParams() : loaded;
    }, []);

    const getParams = () => {
        EntityService.getTechnicalSupport()
            .then(res => {
                setContent(res['data']['data']['technical_support']);
            })
            .catch(err => {
            });
    }

    return (<div className="card no-margin content-panel">
            <div>
                <h1>{i18next.t('Contact for technical support')}</h1>
                <div className="content-body">{content}</div>
            </div>
        </div>
    )
}
