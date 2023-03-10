import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './QuantitySelector.css'

function QuantitySelector({ product, small }) {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext)

  const addProductToCart = () => {
    addItemToCart(product)
  }

  const removeProductFromCart = () => {
    removeItemFromCart(product)
  }

  return (
    <div
      className={`quantity-selector ${small ? 'quantity-selector--small' : ''}`}
    >
      <button
        className={`quantity-selector__arrow ${
          small ? 'quantity-selector__arrow--small' : ''
        }`}
        onClick={removeProductFromCart}
      >
        &#10094;
      </button>
      {product.quantity}
      <button
        className={`quantity-selector__arrow ${
          small ? 'quantity-selector__arrow--small' : ''
        }`}
        onClick={addProductToCart}
      >
        &#10095;
      </button>
    </div>
  )
}

export default QuantitySelector
