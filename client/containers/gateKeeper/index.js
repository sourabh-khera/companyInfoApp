import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserToken } from '../../actions/user_action';
import AuthRoutes from '../../routes/auth_routes';
import UnAuthRoutes from '../../routes/unauth_routes';
import ApproverRoutes from '../../routes/approver_routes';

class GateKeeper extends Component {
	
	componentDidMount() {
		const { saveUserAuthToken } = this.props; 
		const token = localStorage.getItem('mn_reports_token');
		if(token){
			saveUserAuthToken(token);
		}
	}

	render() {
		const { token, profileInfo } = this.props;
		const userCompany = profileInfo && profileInfo.company ? profileInfo.company : '';
		const renderRoutes = token && profileInfo && profileInfo.role === 'Approver' ? 
			<ApproverRoutes />
			: !token ?
				<UnAuthRoutes />
				:
				<AuthRoutes /> ;
		return (
			<div>
				{renderRoutes}
			</div>
		);
	}
}

GateKeeper.propTypes = {
	token: PropTypes.string, 
	saveUserAuthToken: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
	token: state.userReducer.token,
	profileInfo: state.userReducer.profileInfo,
});
const mapDispatchToProps = dispatch => ({
	saveUserAuthToken: bindActionCreators(setUserToken, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(GateKeeper);