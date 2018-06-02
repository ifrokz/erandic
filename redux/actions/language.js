export const actionTypes = {
  SELECT: 'SELECT'
}

export const selectLanguage = (language) => {
  return {
    type: actionTypes.SELECT,
    code: language
  };
};

