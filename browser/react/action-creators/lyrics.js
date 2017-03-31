import {SET_LYRICS} from '../constants';
import axios from 'axios';

export function setLyrics(text){
    return {
        type: SET_LYRICS,
        text: text,
    }
}

export const fetchLyrics = function (artist, song) {
  return function (dispatch, getState) {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      });
  };
};