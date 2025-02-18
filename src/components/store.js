import {createStore} from 'redux';
import userRecuder from './reducer';

const store = createStore(userRecuder);

export default store;