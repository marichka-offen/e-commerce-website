import { useState } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserProfileDocument,
} from '../../utils/firebase'
import FormInput from '../FormInput/FormInput'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

function SignupForm() {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
      setFormFields(defaultFormFields)
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use')
        return
      }
      console.log('Error creating user', error.message)
    }

    resetFormFields()
  }

  const resetFormFields = () => {}

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display name'
          type='text'
          name='displayName'
          id='displayName'
          required
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label='Email'
          type='email'
          name='email'
          id='email'
          required
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label='Password'
          type='password'
          name='password'
          id='password'
          required
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label='Confirm password'
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          required
          value={confirmPassword}
          onChange={handleChange}
        />

        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default SignupForm
