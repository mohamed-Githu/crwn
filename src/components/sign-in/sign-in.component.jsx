import React from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

export class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      passrowd: ''
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
            value={this.state.passrowd}
            required
            label='Password'
            handleChange={this.handleChange}
          />
          <CustomButton value='sign in' type='submit'/>
        </form>
      </div>
    )
  }
}

export default SignIn
