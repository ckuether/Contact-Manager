import api from '../api/index'

export const ADD_CAT = 'ADD_CAT';
export const GET_CATS = 'GET_CATS';

export function addCat(props) {
    return {
        type: ADD_CAT,
        payload: props
    };
}

export function getCats() {
    api.getCats().then(cats => {
        return {
            type: GET_CATS,
            payload: cats
        }
    });
}