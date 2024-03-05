import './SquareComponent.css'
import React from 'react'

const SquareComponent = ({ value, onClick }) => {
  return (
    <button className='square' onClick={onClick}>X</button>
  )
}

export default SquareComponent
