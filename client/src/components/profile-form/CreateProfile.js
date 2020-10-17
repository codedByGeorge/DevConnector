import React, { Fragment, useState  } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

const CreateProfile = props => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  
  const {
  company,
  website,
  location,
  status,
  skills,
  githubusername,
  bio,
  twitter,
  facebook,
  linkedin,
  youtube,
  instagram
  } = formData;

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Profile</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Let's get some information to make your
				profile stand out.
			</p>
			<small>* = required fields</small>
			<form className="form">
				<div className="form-group">
					<select name="status" value={status} onChange={(e) => onChange(e)}>
						<option value="0">* Select Professional Status</option>
						<option value="Developer">Developer</option>
						<option value="Jr. Developer">Jr. Developer</option>
						<option value="Sr. Developer">Sr. Developer</option>
						<option value="Manager">Manager</option>
						<option value="Student or Learning">Student or Learning</option>
						<option value="Instructor or Teacher">Instructor or Teacher</option>
						<option value="Intern">Intern</option>
						<option value="Other">Other</option>
					</select>
					<small className="form-text"
						>Give us an idea of where you are at in your career</small
					>
				</div>
				<div className="form-group">
					<input type="text" name="company" placeholder="Company" value={company} onChange={e => onChange(e)} />
					<small className="form-text"
						>Could be your own company or one you work for</small
					>
				</div>
				<div className="form-group">
					<input
						type="text"
						name="website"
            placeholder="Website or Portfolio"
            value={website}
					/>
					<small className="form-text"
						>Could be your own or a company website</small
					>
				</div>
				<div className="form-group">
					<input type="text" name="location" placeholder="Location" value={location} onChange={e => onChange(e)} />
					<small className="form-text"
						>City and State where you live (ex., Dallas, TX)</small
					>
				</div>
				<div className="form-group">
					<input type="text" name="skills" placeholder="* Skills" value={skills} onChange={e => onChange(e)} />
					<small className="form-text"
						>Please use comma separated values (e.g., HTML5, CSS3, JavaScript,
						PHP)</small
					>
				</div>
				<div className="form-group">
					<input
						type="text"
						name="githubusername"
            placeholder="Github Username"
            value={githubusername}  onChange={e => onChange(e)}
					/>
					<small className="form-text"
						>If you want to include your latest repos and a Github link, please
						add your username</small
					>
				</div>
				<div className="form-group">
					<textarea name="bio" placeholder="A short bio of yourself" value={bio} onChange={e => onChange(e)} ></textarea>
					<small className="form-text">Tell us a little about yourself</small>
				</div>
				<div className="my-2">
					<button onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button" className="btn btn-light">
						Add Social Network Links
					</button>
					<span>Optional</span>
				</div>
        {displaySocialInputs && 
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x"></i>
              <input type="text" name="twitter" placeholder="Twitter URL" value={twitter}  onChange={e => onChange(e)} />
            </div>
            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x"></i>
              <input type="text" name="facebook" placeholder="Facebook URL" value={facebook} onChange={e => onChange(e)} />
            </div>
            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x"></i>
              <input type="text" name="linkedin" placeholder="LinkedIn URL" value={linkedin} onChange={e => onChange(e)} />
            </div>
            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x"></i>
              <input type="text" name="youtube" placeholder="YouTube URL" value={youtube} onChange={e => onChange(e)} />
            </div>
            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x"></i>
              <input type="text" name="instagram" placeholder="Instagram URL" value={instagram} onChange={e => onChange(e)} />
            </div>
          </Fragment>}
					<input type="submit" className="btn btn-primary my-1" />
            <a className="btn btn-light my-1" href="dashboard.html">
              <i className="fas fa-chevron-left"></i> Go Back</a>
			</form>
    </Fragment>
  )
}

CreateProfile.propTypes = {

}

export default CreateProfile;
