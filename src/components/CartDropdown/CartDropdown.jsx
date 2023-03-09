import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import './CartDropdown.css'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <div className='cart-dropdown'>
      <div className='cart-dropdown__cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button text='Go to checkout' />
    </div>
  )
}

export default CartDropdown
