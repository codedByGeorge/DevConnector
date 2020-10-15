import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const { email, password } = formData;
	const onChange = (e) =>
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	const onSubmit = async (e) => {
		e.preventDefault();
		login(email, password);
	};

	// REDIRECT IF LOGGED IN
	if (isAuthenticated) {
		return <Redirect to="/dashboard"></Redirect>
	}
	return (
		<Fragment>
			<h1 className="large text-primary">Sign In</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Sign Into Your Account
			</p>
			<form onSubmit={(e) => onSubmit(e)} className="form">
				<div className="form-group">
					<input
						type="email"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
						placeholder="Email"
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						name="password"
						value={password}
						onChange={(e) => onChange(e)}
						placeholder="Password"
						minLength="6"
					/>
				</div>
				<input className="my-1 btn btn-primary" type="submit" value="Login" />
			</form>
			<p className="my-1">
				Don't have an account? <Link to="/register">Register</Link>
			</p>
		</Fragment>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps,{ login })(Login);
