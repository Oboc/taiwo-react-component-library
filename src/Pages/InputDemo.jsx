import React, { useState } from 'react'
import Input from '../Components/Input/Input'

const InputDemo = () => {
const [textValue, setTextValue] =useState ("")
const [emailValue, setEmailValue] =useState ("")
const [passwordValue, setPasswordValue] =useState ("")

  return (
    <div className='d-flex align-items-center justify-content-center vh-100 p-5 '>
        <div className="div-wrapper">
            {/* Normal Text Input */}
<Input
    label="Username"
    type="text"
    name="username"
    value={textValue}
    onChange={(e) => setTextValue(e.target.value)}
    placeholder="Enter your username"
/>

{/* Email Input */}
<Input
    label="Email"
    type="email"
    name="email"
    value={emailValue}
    onChange={(e) => setEmailValue(e.target.value)}
    placeholder="Enter your email"
    required
/>

{/* Password Input with Error */}
<Input
    label="Password"
    type="password"
    name="password"
    value={passwordValue}
    onChange={(e) => setPasswordValue(e.target.value)}
    placeholder="Enter your password"
   
   
/>

{/* Disabled Input */}
<Input
    label="Disabled Field"
    type="text"
    name="disabled"
    value="Cannot edit"
    onChange={() => {}}
    disabled
/>
        </div>
    </div>
  )
}

export default InputDemo