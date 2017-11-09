import { combineReducers } from 'redux';
import CatsReducer from './reducer_cats';

const rootReducer = combineReducers({
    cats: CatsReducer
});

export default rootReducer;