import Button from '../Button/Button'
import './ProductCard.css'

function ProductCard({ product: { name, price, imageUrl } }) {
  return (
    <div className='product-card'>
      <img src={imageUrl} alt={name} className='product-card__image' />
      <div className='product-card__footer'>
        <span className='product-card__name'>{name}</span>
        <span className='product-card__price'>${price}</span>
      </div>
      <Button buttonType='inverted' text='Add to cart' />
    </div>
  )
}

export default ProductCard
