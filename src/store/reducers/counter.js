import {ADD_ONE, MINUS_ONE} from './../actions/counter';
import originalState from './../state'

function reducer(state = originalState.counter, action) {
    switch (action.type) {
        case ADD_ONE:
            return state + 1;
        case MINUS_ONE:
            return state - 1;
        default:
            return state;
    }
}

export default reducer;