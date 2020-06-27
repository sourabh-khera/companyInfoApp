import {  
	SET_USER_TOKEN,
	SAVE_USER_DETAILS,
} from './actionTypes'; 


export const setUserToken = token => ({ type: SET_USER_TOKEN, token });

export const saveUserDetails = data => ({ type: SAVE_USER_DETAILS, data }); 
