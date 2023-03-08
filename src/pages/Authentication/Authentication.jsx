import SigninForm from '../../components/SigninForm/SigninForm'
import SignupForm from '../../components/SignupForm/SignupForm'
import './Authentication.css'

function SignIn() {
  return (
    <div className='authentication'>
      <SigninForm className='authentication__form' />
      <SignupForm className='authentication__form' />
    </div>
  )
}

export default SignIn
