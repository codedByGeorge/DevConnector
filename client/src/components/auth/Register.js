import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});
	const onChange = (e) =>
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	const onSubmit = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			setAlert('Passwords do not match', 'danger');
		} else {
			register({ name, email, password });
		}
	};
	const { name, email, password, password2 } = formData;
	return (
		<Fragment>
			<h1 className="large text-primary">Sign Up</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Create Your Account
			</p>
			<form onSubmit={(e) => onSubmit(e)} className="form">
				<div className="form-group">
					<input
						type="text"
						placeholder="Name"
						name="name"
						value={name}
						onChange={(e) => onChange(e)}
						//required
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
						placeholder="Email"
						//required
					/>
					<small className="form-text">
						This site uses <a href="https://en.gravatar.com/">Gravatar</a>. If
						you want a profile image, use an email address linked to a
						<a href="https://en.gravatar.com"> Gravatar</a> account.
					</small>
				</div>
				<div className="form-group">
					<input
						type="password"
						name="password"
						value={password}
						onChange={(e) => onChange(e)}
						placeholder="Password"
						//minLength="6"
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						name="password2"
						value={password2}
						onChange={(e) => onChange(e)}
						placeholder="Confirm Password"
						//minLength="6"
					/>
				</div>
				<input
					className="my-1 btn btn-primary"
					type="submit"
					value="Register"
				/>
			</form>
			<p className="my-1">
				Already have an account? <Link to="/login">Sign In</Link>
			</p>
		</Fragment>
	);
};

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, register })(Register);
