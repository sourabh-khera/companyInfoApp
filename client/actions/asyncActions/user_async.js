import { webApiPost, webApiGet } from '../../utils'; 
import { saveUserDetails } from '../../actions/user_action';

const baseUrl = 'http://localhost:4000/api/v1/user';

export const authenticateUser = credentials => async dispatch => { 
	const URL = `${baseUrl}/login`;
	try { 
    const response = await webApiPost('', URL, JSON.stringify(credentials)).request;
		const { data: { data }, status } = response;
		if (status === 200) { 
			localStorage.setItem('company_info_user_token', data['token']); 
			dispatch(saveUserDetails(data)); 
		} 
	} catch (error) { 
		console.log(error);
	} 
}; 

export const getUserInfo = token => async dispatch => { 
	const URL = `${baseUrl}/info`;
	try { 
		const response = await webApiGet(token, URL).request;
		const { data: { data }, status } = response;
		if (status === 200) { 
			dispatch(saveUserDetails(data)); 
		} 
	} catch (error) { 
		console.log(error);
	} 
}; 

