import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './CartIcon.css'

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartItemsQuantity } =
    useContext(CartContext)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className='cart-icon' onClick={toggleCart}>
      <ShoppingIcon className='cart-icon__icon' />
      <span className='cart-icon__item-count'>{cartItemsQuantity}</span>
    </div>
  )
}

export default CartIcon
