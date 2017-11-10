import { combineReducers } from 'redux';
import { cats, catsIsLoading, catsHasErrored } from './reducer_cats';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    cats,
    catsIsLoading,
    catsHasErrored,
    form: formReducer
});

export default rootReducer;