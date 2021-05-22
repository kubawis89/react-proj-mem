import {createStore} from 'redux';
import {memReducer} from './reducers/globalReducer';

const store = createStore(memReducer);

export default store;