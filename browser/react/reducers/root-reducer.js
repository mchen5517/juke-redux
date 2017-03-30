import {SET_LYRICS} from '../constants';

const initialState = { text: '' };

function reducer(state=initialState, action){
    switch(action.type){
        case SET_LYRICS:
            return Object.assign({}, state, {lyric: action.lyric})
        default:
            return state;
    }
}

export default reducer;