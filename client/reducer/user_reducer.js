import {
  SET_USER_TOKEN,
  SAVE_USER_DETAILS,
} from '../actions/actionTypes';

const initialState = {
  token: '',
  userInfo: {},
};

const setUserToken = (state, { token }) => ({ ...state, token });

const saveUserDetails = () => {

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