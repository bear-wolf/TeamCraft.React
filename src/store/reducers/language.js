import LanguageChange from '../actions/language';
import state from './../state'

export default function language(state, action) {
    switch(action.type) {
        case LanguageChange: return action.language;
        //case LanguageChange: return action.language;

        default: return state;
    }
}