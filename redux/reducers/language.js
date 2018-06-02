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
        selected: state.available.filter(lang => lang.code === action.code)[0]
      };
    default: 
      return state;
  };
};