import {SET_LANGUAGE, GET_LANGUAGE} from './../constans/language'

export const setLanguage = (value) => {
    return {
        type: SET_LANGUAGE,
        payload: value
    };
};

export const getLanguage = (value) => {
    debugger;
    return {
        type: GET_LANGUAGE,
        payload: value
    };
};