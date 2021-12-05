import { createStore } from 'redux';
import recipeReducer from  '../reducers/index'

export const store = createStore(
  recipeReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );