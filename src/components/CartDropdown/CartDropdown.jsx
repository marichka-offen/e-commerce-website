import React from 'react'
import Button from '../Button/Button'
import './CartDropdown.css'

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-dropdown__cart-items' />
    <Button text='Go to checkout' />
  </div>
)

export default CartDropdown
