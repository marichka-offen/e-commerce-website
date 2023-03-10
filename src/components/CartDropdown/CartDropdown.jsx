import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import './CartDropdown.css'

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext)
  const closeCart = () => {
    setIsCartOpen(false)
  }

  const navigate = useNavigate()
  const goToCart = () => {
    navigate('/cart')
    closeCart()
  }

  return (
    <div className='cart-dropdown'>
      <div className='cart-dropdown__cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button text='Go to checkout' onClick={goToCart} />
    </div>
  )
}

export default CartDropdown
