import actionSimple from '../actions/simple';
import state from './../state';

export default function simple(state = state.simple, action) {
    switch(action.type) {
        case actionSimple: return action.simple;

        default: return state;
    }
}