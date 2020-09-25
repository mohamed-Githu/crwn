import React from 'react'

import './sign-up.styles.scss'

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, createUserDocumentProfile } from '../../firebase/firebase.utils'
import { withRouter } from 'react-router-dom';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password and confirm password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserDocumentProfile(user, {displayName});

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }, () => this.props.history.push(''))
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    const { email, password, confirmPassword, displayName } = this.state;
    return (
      <div className="sign-up">
        <h2 className="sign-up__title">I don't have an account</h2>
        <span className="sign-up__subtitle">Sign up with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='displayName'
            type='text'
            value={displayName}
            required
            label='User Name'
            handleChange={this.handleChange}
          />
          <FormInput
            name='email'
            type='email'
            value={email}
            required
            label='Email'
            handleChange={this.handleChange}
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            required
            label='Password'
            handleChange={this.handleChange}
          />
          <FormInput
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            required
            label='Confirm Password'
            handleChange={this.handleChange}
          />
          <CustomButton value='sign up' type='submit'/>
        </form>
      </div>
    )
  }
}

export default withRouter(SignUp);