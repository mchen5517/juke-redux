import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/root-reducer';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();


const store = createStore(
    reducer, 
    composeEnhancers(applyMiddleware(logger, thunkMiddleware))
);

export default store;