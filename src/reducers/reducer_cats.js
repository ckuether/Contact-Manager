import api from '../api';
import * as generateId from 'uuid/v4';

export default function() {
    return [
    {
        id: generateId(),
        name: 'Boots',
        img: 'http://cdn1-www.cattime.com/assets/uploads/2015/06/affection3.png',
    },
    {
        id: generateId(),
        name: 'Precious',
        img: 'https://media.giphy.com/media/kLALBwFNGHcGY/giphy.gif',
    },
    {
        id: generateId(),
        name: 'Tommy',
        img: 'http://cdn3-www.cattime.com/assets/uploads/2015/06/shredding3.png',
    },
    ]
}