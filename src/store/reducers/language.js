import {GET_LANGUAGE, SET_LANGUAGE} from '../constans/language';
import originalState from './../state'

export default function language(state = originalState.language, action) {
    switch(action.type) {
        case GET_LANGUAGE: return state;
        case SET_LANGUAGE: return action.payload;

        default: return state;
    }
}