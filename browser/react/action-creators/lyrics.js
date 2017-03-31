import {SET_LYRICS} from '../constants';

function setLyrics(text){
    return {
        type: SET_LYRICS,
        text: text,
    }
}

export default setLyrics;