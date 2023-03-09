import './CartItem.css'

const CartItem = ({ cartItem: { imageUrl, price, name, quantity } }) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt={`${name}`} className='cart-item__item-image' />
      <div className='cart-item__item-details'>
        <span className='cart-item__name'>{name}</span>
        <span className='cart-item__price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default CartItem
