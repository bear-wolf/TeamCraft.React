import LanguageChange from '../actions/language';

function change(value) {
    return {
        type: LanguageChange,
        language: value
    };
}

export default change;