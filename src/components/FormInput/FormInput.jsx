import './FormInput.css'

function FormInput({ label, ...otherProps }) {
  return (
    <div className='form-input'>
      <label
        htmlFor={otherProps.name}
        className={`form-input__label ${
          otherProps.value.length ? 'form-input__label--shrink' : ''
        }`}
      >
        {label}
      </label>
      <input {...otherProps} className='form-input__input' />
    </div>
  )
}

export default FormInput
