import {SET_LYRICS} from '../constants';

const initialState = { text: '' };

function reducer(state=initialState, action){
    switch(action.type){
        case SET_LYRICS:
            return Object.assign({}, state, {text: action.text})
        default:
            return state;
    }
}

export default reducer;