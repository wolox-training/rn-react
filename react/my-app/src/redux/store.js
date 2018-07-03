import { createStore } from 'redux'
import reducer from './plays/reducer'

const store = createStore(reducer);
//store.dispatch({ type:'SQUARE_CLICK' });

export default store;
