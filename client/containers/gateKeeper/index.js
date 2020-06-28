import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserToken } from '../../actions/user_action';
import { getUserInfo } from '../../actions/asyncActions/user_async';
import AuthRoutes from '../../routes/auth_routes';
import UnAuthRoutes from '../../routes/unauth_routes';
import ApproverRoutes from '../../routes/approver_routes';

class GateKeeper extends Component {
	
	componentDidMount() {
		const { saveUserAuthToken, fetchUserInfo } = this.props; 
		const token = localStorage.getItem('company_info_user_token');
		if(token){
			saveUserAuthToken(token);
			fetchUserInfo(token);
		}
	}

	render() {
		const { token, userDetails } = this.props;
		const renderRoutes = token && userDetails && userDetails.role === 'Approver' ? 
			<ApproverRoutes />
			: !token ?
				<UnAuthRoutes />
				:
				<AuthRoutes /> ;
		return (
			renderRoutes
		);
	}
}

GateKeeper.propTypes = {
	token: PropTypes.string, 
	saveUserAuthToken: PropTypes.func.isRequired,
	fetchUserInfo: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
	token: state.userReducer.token,
	userDetails: state.userReducer.userDetails,
});
const mapDispatchToProps = dispatch => ({
	saveUserAuthToken: bindActionCreators(setUserToken, dispatch),
	fetchUserInfo: bindActionCreators(getUserInfo, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(GateKeeper);