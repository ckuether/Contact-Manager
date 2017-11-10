import { combineReducers } from 'redux';
import CatsReducer from './reducer_cats';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    cats: CatsReducer,
    form: formReducer
});

export default rootReducer;