import {actionTypes, selectLanguage} from '../actions/language';

const defaultState = {
  selected: undefined,
  available: []
};

export const languageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SELECT: 
      return {
        ...state,
        selected: action.language
      };
    default: 
      return state;
  };
};