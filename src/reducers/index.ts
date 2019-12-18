import {combineReducers} from 'redux';
import users from './users';
import services from './services';

export const rootReducer = combineReducers({
    users,
    services,
});