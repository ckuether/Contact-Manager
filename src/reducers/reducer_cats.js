import * as generateId from 'uuid/v4';
import { FETCH_CATS_SUCCESS, CATS_IS_LOADING, CATS_HAS_ERRORED } from '../actions';

export function cats(state = [], action){
    switch(action.type) {
        case FETCH_CATS_SUCCESS:
            return action.cats;

        default:
            return state;
    }
}

export function catsIsLoading(state = false, action){
    switch(action.type){
        case CATS_IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export function catsHasErrored(state = false, action){
    switch(action.type){
        case CATS_HAS_ERRORED:
            return action.hasErrored;

        default:
            return state;
    }
}