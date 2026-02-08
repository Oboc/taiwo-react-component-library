import React from 'react'
import "./Button.css"


//We are using destructuring to pull props directly. Every prop has either a default value or will be provided when used. Text is what's displayed inside the button (like "Submit, cancel")
const Button = ({children,variant ="primary", size="md", disabled = false, onClick, type ="button"}) => {
  //The menu of options which the button will use.
  const className = `btn-base ${variant} ${size} ${disabled ? "disabled" : ""}` 
  return (
    <div>
      
      <button className={className}
      type={type}
      aria-label={children}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-disabled={disabled}>
             {children}
      </button>
     
    </div>
  )
}

export default Button