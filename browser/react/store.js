import {createStore, applyMiddleware, combineReducers} from 'redux';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import albumsReducer from './reducers/albums-reducer';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();


const store = createStore(
    combineReducers({
      lyrics: lyricsReducer,
      player: playerReducer,
      albums: albumsReducer
    }), 
    composeEnhancers(applyMiddleware(logger, thunkMiddleware))
);

export default store;