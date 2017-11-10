
export const ADD_CAT = 'ADD_CAT';

export function addCat(props) {
    console.log("TEST");
    //Return an action with Type property
    return {
        type: ADD_CAT,
        payload: props
    };
}