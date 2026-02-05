import React from 'react'
import { useState } from 'react'
import Form from '../Components/Form/Form'
import Button from '../Components/Button/Button'
import Input from '../Components/Input/Input'

const FormDemo = () => {
    const [email, setEmail] =useState ("")
    const [password, setPassword] =useState ("")
    const [passwordError, setPasswordError] =useState ("")
    const [emailError, setEmailError] =useState ("")
    

    function handleSubmit(e){
        e.preventDefault()
        if(!email){
            setEmailError("")
        } else {
            setEmailError("")
        }
        if(password.length <6) {
            setPasswordError("Password must be at least 6 characters ")
        } else{
            setPasswordError("")
        }
       
    
        if (email && password.length >= 6 ){
            console.log("Form Submitted",
                {
                    email, password
                }
            )
      
        }
    }
  return (
    <div className=' d-flex align-items-center justify-content-center vh-100 p-5 '>
        <div style={{maxwidth: "50px", margin: "2rem auto"}}>
            
                <Form onSubmit={handleSubmit}>
                    
                        <Input type="email"
                    label="Email"
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required
                    error={emailError}
                    
                    />
                                    
                    <Input type="Password"
                    label="password"
                    name="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    
                    error={password && password.length < 6 ? "min 6 characters" : ""}
                    required
                 
                    />
                    
                    
                    
                    
                        <Button variant="primary" type="submit" size="lg" >
                                Submit
                        </Button>
                    
                </Form>
        </div>
    </div>
  )
}

export default FormDemo