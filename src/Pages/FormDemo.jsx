import React from 'react'
import { useState } from 'react'
import Form from '../Components/Form/Form'
import Button from '../Components/Button/Button'
import Input from '../Components/Input/Input'

const FormDemo = () => {
    const [email, setEmail] =useState ("")
    const [password, setPassword] =useState ("")
    

    function handleSubmit(e){
        e.preventDefault()
       
    
        console.log("Form Submitted", {email,password})
    }
  return (
    <div>
        <div style={{maxwidth: "50px", margin: "2rem auto"}}>
            
                <Form onSubmit={handleSubmit}>
                    
                        <Input type="email"
                    label="Email"
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required/>
                    
                    <div>
                
                    <Input type="Password"
                    label="password"
                    name="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    error={password && password.length < 6 ? "min 6 characters" : ""}
                    required/>
                    </div>
                    
                    
                    
                        <Button variant="primary" type="submit" size="lg" >
                                Submit
                        </Button>
                    
                </Form>
        </div>
    </div>
  )
}

export default FormDemo