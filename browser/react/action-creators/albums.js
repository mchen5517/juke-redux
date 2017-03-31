import {RECEIVE_ALBUMS, RECEIVE_ALBUM} from '../constants';
import axios from 'axios';

import { convertAlbum, convertAlbums } from '../utils';

export const fetchAlbums = function () {
  return function (dispatch, getState) {
    axios.get(`/api/albums`)
      .then(res => res.data)
      .then(albums => {
        dispatch({albums: convertAlbums(albums), type: RECEIVE_ALBUMS});
      });
  };
};

export const fetchAlbum = function (albumId) {
  return function (dispatch, getState) {
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => {
        dispatch({selectedAlbum: convertAlbum(album), type: RECEIVE_ALBUM});
      });
  };
};