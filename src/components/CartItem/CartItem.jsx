import './CartItem.css'
import QuantitySelector from '../QuantitySelector/QuantitySelector'
import RemoveProductButton from '../RemoveProductButton/RemoveProductButton'

const CartItem = ({ cartItem }) => {
  const { id, imageUrl, price, name } = cartItem
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt={`${name}`} className='cart-item__item-image' />
      <div className='cart-item__item-details'>
        <div className='cart-item__item-details--top-row'>
          <span className='cart-item__name'>{name}</span>
          <RemoveProductButton id={id} small />
        </div>
        <span className='cart-item__price'>
          <QuantitySelector product={cartItem} small /> &#215; ${price}
        </span>
      </div>
    </div>
  )
}

export default CartItem
