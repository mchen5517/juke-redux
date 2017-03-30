import {SET_LYRICS} from '../constants';

function setLyrics(text){
    return {
        type: SET_LYRICS,
        lyric: text,
    }
}

export default setLyrics;