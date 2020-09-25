import React from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import { withRouter } from 'react-router-dom'

export class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ email: '', passrowd: '' })
  }

  handleSignIn = () => {
    signInWithGoogle().then(() => this.props.history.push('/'))
  }

  render() {
    return (
      <div className='sign-in' onSubmit={this.handleSubmit}>
        <h2 className='sign-in__title'>I already have an account</h2>
        <span className='sign-in__subtitle'>Sing in with your email and passrowd</span>
        <form>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            required
            label='Email'
            handleChange={this.handleChange}
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            required
            label='Password'
            handleChange={this.handleChange}
          />
          <div className="sign-in__buttons">
            <CustomButton value='sign in' type='submit'/>
            <CustomButton isGoogle={true} value='sign in with google' onClick={this.handleSignIn}/>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn)
