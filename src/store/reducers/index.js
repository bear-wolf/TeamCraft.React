import { combineReducers } from 'redux';
import language from './language';
import simple from './simple';
import counter from './counter';

export default combineReducers({
    language,
    counter
});
