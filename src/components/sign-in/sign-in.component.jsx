import React, { useState } from 'react'
import { connect } from 'react-redux';

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentiols, setUserCredentiols] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentiols;

  const handleChange = e => {
    const { value, name } = e.target
    setUserCredentiols({ ...userCredentiols, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    emailSignInStart(email, password);
  };

  return (
    <div className='sign-in'>
      <h2 className='sign-in__title'>I already have an account</h2>
      <span className='sign-in__subtitle'>Sing in with your email and passrowd</span>
      <form onSubmit={handleSubmit}>
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
        <div className="sign-in__buttons">
          <CustomButton value='sign in' type='submit'/>
          <CustomButton
            type='button'
            isGoogle={true} 
            value='sign in with google' 
            onClick={googleSignInStart}
          />
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
