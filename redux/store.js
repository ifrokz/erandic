import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import {languageReducer} from './reducers/language';

const exampleInitialState = {
  language: { 
    selected: 'es',
    available: ['en', 'es']
  }
};

const isClient = () => {
  return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
};

export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    
    default: return state
  };
};

export function initializeStore (initialState = exampleInitialState) {
  const store = createStore(
    combineReducers({
      language: languageReducer,
      isClient: isClient()
    }), 
    initialState, 
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
  return store;
};