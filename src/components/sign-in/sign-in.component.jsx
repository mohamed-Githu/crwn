import React, { useState } from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

const SignIn = () => {
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

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentiols({ email: '', password: '' });
    } catch(error) {
      console.error(error)
    }

  }

  const handleSignIn = () => signInWithGoogle();

  return (
    <div className='sign-in' onSubmit={handleSubmit}>
      <h2 className='sign-in__title'>I already have an account</h2>
      <span className='sign-in__subtitle'>Sing in with your email and passrowd</span>
      <form>
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
          <CustomButton isGoogle={true} value='sign in with google' onClick={handleSignIn}/>
        </div>
      </form>
    </div>
  )
}


export default SignIn;
