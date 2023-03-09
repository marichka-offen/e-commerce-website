import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import './CartDropdown.css'

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext)
  const closeCart = () => {
    setIsCartOpen(false)
  }
  return (
    <div className='cart-dropdown'>
      <div className='cart-dropdown__cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Link to='/cart'>
        <Button text='Go to checkout' onClick={closeCart} />
      </Link>
    </div>
  )
}

export default CartDropdown
