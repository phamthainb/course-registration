import {combineReducers} from 'redux';
import subjects from '../reducers/subjects';

const appReducer = combineReducers({
    subjects,
})

export default appReducer;