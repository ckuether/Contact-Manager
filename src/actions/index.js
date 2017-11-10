import api from '../api/index'

export const ADD_CAT = 'ADD_CAT';
export const CATS_IS_LOADING = 'CATS_IS_LOADING';
export const FETCH_CATS_SUCCESS = 'FETCH_CATS_SUCCESS';
export const CATS_HAS_ERRORED = 'CATS_HAS_ERRORED';

export function addCat(cat) {

    api.addCat({
        name: cat.name,
        img: cat.imageUrl
    })
    .then(fetchCats());

    // api.addCat({
    //     name: cat.name,
    //     img: cat.imageUrl
    // })
}

export function catsHasErrored(bool) {
    return {
        type: CATS_HAS_ERRORED,
        hasErrored: bool
    }
}

export function fetchCatsSuccess(cats){
    return {
        type: FETCH_CATS_SUCCESS,
        cats
    }
}

export function catsIsLoading(bool){
    return {
        type: CATS_IS_LOADING,
        isLoading: bool
    }
}

export function fetchCats() {
    return (dispatch) => {
        dispatch(catsIsLoading(true));

        api.getCats().then(cats => {
            dispatch(catsIsLoading(false));

            return cats;
        })
        .then(cats => dispatch(fetchCatsSuccess(cats)))
        .catch(() => dispatch(catsHasErrored(true)))
    }
}