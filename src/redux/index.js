import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './reducers';

export default createStore(
    combineReducers({
        AppReducer
    }), {}, (applyMiddleware(thunk))
)