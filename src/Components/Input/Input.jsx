import React from 'react'
import "./Input.css"

const Input = ({label, type, name, value, onChange, placeholder,required,disabled,error}) => {
  return (
    <div className='input-wrapper'>
      {/**Label*/}
      {
        label && (
<label htmlFor={name}
className="input-label">
  {label} {required && ""}
  </label>
        )
      }
        {/*Input field*/}
      <input type={type}
      name ={name}
      value ={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      className={`input-base ${error ? "input-error": ""}}`}
     aria-invalid={error ? true : false}
     aria-describedby={error ? `$ {name} - error` : undefined}
    />
        
        {/* Error messages*/}
      {
        error && <small id={$`{name}-error`}
        className='input-error-text' >{error}</small>
      }
            
          
            
    </div>
  )
}

export default Input