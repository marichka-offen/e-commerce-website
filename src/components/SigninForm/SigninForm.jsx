import { useState } from 'react'
import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'
import './SigninForm.css'

const defaultFormFields = {
  email: '',
  password: '',
}

function SigninForm() {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const signinGoogleUser = async () => await signInWithGooglePopup()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await signInUserWithEmailAndPassword(email, password)
      setFormFields(defaultFormFields)
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          alert('Invalid email')
          break
        case 'auth/user-disabled':
          alert('User disabled')
          break
        case 'auth/user-not-found':
          alert('User not found')
          break
        case 'auth/wrong-password':
          alert('Wrong password')
          break
        default:
          console.log('Error signing in user', error.message)
      }
    }
  }

  return (
    <div className='signin-form'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          name='email'
          id='signin-email'
          required
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label='Password'
          type='password'
          name='password'
          id='signin-password'
          required
          value={password}
          onChange={handleChange}
        />

        <div className='signin-form__buttons'>
          <Button type='submit' text='Sign in' />
          <Button
            type='button'
            onClick={signinGoogleUser}
            text='Google Sign in'
            buttonType='google'
          />
        </div>
      </form>
    </div>
  )
}

export default SigninForm
