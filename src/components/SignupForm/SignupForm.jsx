import { useState } from 'react'
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

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log(e)
          console.log(formFields)
        }}
      >
        <label htmlFor='displayName'>Display name</label>
        <input
          type='text'
          name='displayName'
          id='displayName'
          required
          value={displayName}
          onChange={handleChange}
        />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          required
          value={email}
          onChange={handleChange}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          required
          value={password}
          onChange={handleChange}
        />

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
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
