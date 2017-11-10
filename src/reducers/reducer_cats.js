import api from '../api';
import * as generateId from 'uuid/v4';
import { ADD_CAT, getCats } from '../actions/index';

export default function(state, action) {
    switch(action.type) {
        case ADD_CAT:
            console.log("Kitty!");
            api.getCats().then(function(results){
                console.log(results);
            });
    }

    // if(state == null){
    //     return state;
    // }

    api.getCats().then(function(results){
        return results;
    }, function(rejection){
        return [];
    });

    // return [];

    // let cats = [
    // {
    //     id: generateId(),
    //     name: 'Boots',
    //     img: 'http://cdn1-www.cattime.com/assets/uploads/2015/06/affection3.png',
    // },
    // {
    //     id: generateId(),
    //     name: 'Precious',
    //     img: 'https://media.giphy.com/media/kLALBwFNGHcGY/giphy.gif',
    // },
    // {
    //     id: generateId(),
    //     name: 'Tommy',
    //     img: 'http://cdn3-www.cattime.com/assets/uploads/2015/06/shredding3.png',
    // },
    // ]


    // return cats
}