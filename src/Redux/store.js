import {legacy_createStore,applyMiddleware, combineReducers, compose} from 'redux';
import thunk from "redux-thunk";
import {reducer as AuthReducer } from './AuthReducer/reducer';

const rootReducer = combineReducers({
    AuthReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));