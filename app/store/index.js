import { createStore } from 'redux';
import appStateReducer from '../reducers';

const store = createStore(appStateReducer);

export default store;
