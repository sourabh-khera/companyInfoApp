import { webApiPost } from '../../utils'; 
import { saveUserDetails } from '../../actions/user_action';

export const authenticateUser = credentials => async dispatch => { 
	const URL = `http://localhost:4000/api/v1/login`;
	try { 
    const response = await webApiPost('', URL, JSON.stringify(credentials)).request;
    console.log(response, "resp----");
		if (status === 200) { 
			localStorage.setItem('company_info_user_token', authDetails['token']); 
			dispatch(saveUserDetails(authDetails)); 
		} 
	} catch (error) { 
    console.log(error);
	} 
}; 
