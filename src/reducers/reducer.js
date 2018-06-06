const initialState = {
    userDetails: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_USER_DETAILS': {
      return {
        ...state,
        userDetails: action.userDetails,
      };
    }
    default:
      return state;
  }
}

export default reducer;
