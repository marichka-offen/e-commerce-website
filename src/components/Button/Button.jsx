import './Button.css'

const ButtonTypes = {
  google: 'button--google-sign-in',
  inverted: 'button--inverted',
}

function Button({ text, buttonType, ...options }) {
  return (
    <button
      className={`button ${buttonType ? ButtonTypes[buttonType] : ''}`}
      {...options}
    >
      {text}
    </button>
  )
}

export default Button
