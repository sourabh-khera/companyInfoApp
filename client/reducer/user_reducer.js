import {
  SET_USER_TOKEN,
  SAVE_USER_DETAILS,
} from '../actions/actionTypes';

const initialState = {
  token: '',
  userDetails: {},
  isAuthenticated: false,
};

const setUserToken = (state, { token }) => ({ ...state, token });

const saveUserDetails = (state, { data }) => {
  if(Object.keys(data).includes('token')) {
    const { token, userDetails, isAuthenticated } = data;
    return {...state, token, userDetails, isAuthenticated };
  } else {
    return {...state, userDetails: data };
  } 
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DETAILS:
      return saveUserDetails(state, action);
    case SET_USER_TOKEN:
      return setUserToken(state, action);
    default: return state;
  }
}

export default userReducer;