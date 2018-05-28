import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import {languageReducer} from './reducers/language';

const exampleInitialState = {
  language: { selected: 'EN'}
}

export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    
    default: return state
  }
}

export function initializeStore (initialState = exampleInitialState) {
  // console.log('iniciando store:', initialState);
  const store = createStore(
    combineReducers({
      language: languageReducer
    }), 
    initialState, 
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
  return store;
}