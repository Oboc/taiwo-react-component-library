import React from 'react'
import "./Form.css"

const Form = ({onSubmit, children, className}) => {
    


    
  return (
    <div>
        <form onSubmit={onSubmit}
        className={`form-base ${className || ""}`}>
                {children}
        </form>
    </div>
  )
}

export default Form