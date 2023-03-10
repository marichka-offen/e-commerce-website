import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './RemoveProductButton.css'

function RemoveProductButton({ id, small }) {
  const { removeProductFromCart } = useContext(CartContext)

  const removeProduct = () => {
    removeProductFromCart(id)
  }
  return (
    <button
      className={`remove-product-button ${
        small ? 'remove-product-button--small' : ''
      }`}
      onClick={removeProduct}
    >
      &#10005;
    </button>
  )
}

export default RemoveProductButton
