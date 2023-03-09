import Button from '../Button/Button'
import './ProductTableItem.css'

function ProductTableItem({ cartItem: { imageUrl, name, quantity, price } }) {
  return (
    <div className='product-table-item'>
      <img
        src={imageUrl}
        alt={name}
        className='product-table-item__characteristic product-table-item__image'
      />
      <div className='product-table-item__characteristic'>{name}</div>
      <div className='product-table-item__characteristic'>{quantity}</div>
      <div className='product-table-item__characteristic'>${price}</div>
      <div className='product-table-item__characteristic'>
        <Button buttonType='inverted' text='X' />
      </div>
    </div>
  )
}

export default ProductTableItem
