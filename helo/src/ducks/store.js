import {createStore} from 'redux';
import reducer from './reducer';
//import reduxPromiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer);
