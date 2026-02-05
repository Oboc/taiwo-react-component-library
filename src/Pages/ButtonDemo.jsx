import React from 'react'
import Button from '../Components/Button/Button'


const ButtonDemo = () => {
  return (
    <div className='d-flex align-items-center justify-content-center vh-100 p-5  '> 
        <div  className='d-flex align-items-center justify-content-center gap-1'>
     <Button variant="primary" size="lg" >Click me</Button>
     <Button variant="secondary" size="md" >Click me</Button>
     <Button variant="outline" size="sm">Outline</Button>
      
    </div>
    </div>
    
  )
}

export default ButtonDemo