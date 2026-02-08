import React from 'react'
import "./Form.css"

const Form = ({onSubmit, children, className}) => {
    


    
  return (
    <div>
        <form onSubmit={onSubmit}
        className={`form-base ${className || ""}`} aria-label ="form">
                {children}
        </form>
    </div>
  )
}

export default Form