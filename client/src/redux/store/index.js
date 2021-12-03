import { createStore } from 'redux';
import newPost from '../../reducer';

export const store = createStore(
  newPost, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );