import React from 'react'
import Button from '../Components/Button/Button'


const ButtonDemo = () => {
  return (
    <div>
     <Button variant="primary" size="lg" >Click me</Button>
     <Button variant="secondary" size="md" >Click me</Button>
     <Button variant="outline" size="sm">Outline</Button>
      
    </div>
  )
}

export default ButtonDemo