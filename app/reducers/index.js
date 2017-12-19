import { combineReducers } from 'redux';
import appStateReducer from './appStateReducer';

const appReducer = combineReducers({
  appState: appStateReducer,
});

export default appReducer;
