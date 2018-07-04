import { createStore } from 'redux'
import reducer from './plays/reducer'

const store = createStore(reducer);

export default store;
