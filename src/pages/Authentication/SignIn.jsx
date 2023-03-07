import {
  createUserProfileDocument,
  signInWithGooglePopup,
} from '../../utils/firebase'

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserProfileDocument(user)
  }
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Google Sign in</button>
    </div>
  )
}

export default SignIn
