import './FormInput.css'

function FormInput({ label, ...options }) {
  return (
    <div className='form-input'>
      <input {...options} className='form-input__input' />

      <label
        htmlFor={options.id}
        className={`form-input__label ${
          options.value.length ? 'form-input__label--shrink' : ''
        }`}
      >
        {label}
      </label>
    </div>
  )
}

export default FormInput
