import React, { useState } from 'react'
import { connect } from 'react-redux';

import './sign-up.styles.scss'

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart })  =>{
  const [userCredentiols, setUserCredentiols] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentiols;

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentiols({ ...userCredentiols, [name]: value });
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and confirm password don't match");
      return;
    }

    signUpStart({ displayName, email, password });

    setUserCredentiols({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  return (
    <div className="sign-up">
      <h2 className="sign-up__title">I don't have an account</h2>
      <span className="sign-up__subtitle">Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='displayName'
          type='text'
          value={displayName}
          required
          label='User Name'
          handleChange={handleChange}
        />
        <FormInput
          name='email'
          type='email'
          value={email}
          required
          label='Email'
          handleChange={handleChange}
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          required
          label='Password'
          handleChange={handleChange}
        />
        <FormInput
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          required
          label='Confirm Password'
          handleChange={handleChange}
        />
        <CustomButton value='sign up' type='submit'/>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentiols => dispatch(signUpStart(userCredentiols))
})

export default connect(null, mapDispatchToProps)(SignUp);