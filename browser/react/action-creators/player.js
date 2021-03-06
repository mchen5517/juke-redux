import {
  START_PLAYING,
  STOP_PLAYING,
  SET_CURRENT_SONG,
  SET_LIST,
  SET_PROGRESS
} from '../constants';
import AUDIO from '../audio';
import { convertAlbum, convertAlbums, convertSong, skip } from '../utils';

const startPlaying = () => ({ type: START_PLAYING });

const stopPlaying = () => ({ type: STOP_PLAYING });

const setProgressHelper = (progress) => ({progress, type: SET_PROGRESS});

const setCurrentSong = (currentSong) => ({ 
  type: SET_CURRENT_SONG,
  currentSong
});

const setCurrentSongList = (currentSongList) => ({ 
  type: SET_LIST,
  currentSongList
});

export const play = () => dispatch => {
  AUDIO.play();
  dispatch(startPlaying());
};

export const pause = () => dispatch => {
  AUDIO.pause();
  dispatch(stopPlaying());
};

export const load = (currentSong, currentSongList) => dispatch => {
  AUDIO.src = currentSong.audioUrl;
  AUDIO.load();
  dispatch(setCurrentSongList(currentSongList));
  dispatch(setCurrentSong(currentSong));
};

export const startSong = (song, list) => dispatch => {
  dispatch(pause());
  dispatch(load(song, list));
  dispatch(play());
};

export const toggle = () => (dispatch, getState) => {
  const { isPlaying } = getState().player;
  if (isPlaying) dispatch(pause()); 
  else dispatch(play());
};

export const toggleOne = (selectedSong, selectedSongList) => 
  (dispatch, getState) => {
    const { currentSong } = getState().player;
    if (selectedSong.id !== currentSong.id)
      dispatch(startSong(selectedSong, selectedSongList));
    else dispatch(toggle());
};

export const next = () => 
  (dispatch, getState) => {
    dispatch(startSong(...skip(1, getState().player)));
};

export const prev = () => 
  (dispatch, getState) => {
    dispatch(startSong(...skip(-1, getState().player)));
};

export const setProgress = (progress) => dispatch => {
  dispatch(setProgressHelper(progress));
};