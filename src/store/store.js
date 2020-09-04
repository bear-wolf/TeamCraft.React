import { createStore } from 'redux';
import reducers from './reducers/index';

/*
* Two parameters for access redux plugin for chrome
* */
const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;