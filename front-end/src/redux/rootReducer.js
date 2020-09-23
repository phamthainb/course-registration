import {combineReducers} from 'redux';
import subjects from '../reducers/subjects';
import cart from '../reducers/cart';

const appReducer = combineReducers({
    subjects,
    cart
})

export default appReducer;