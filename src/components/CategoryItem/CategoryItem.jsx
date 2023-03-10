import './CategoryItem.css'
import { Link } from 'react-router-dom'

function CategoryItem({ category: { imageUrl, title } }) {
  return (
    <Link
      to={`/shop/${title.toLowerCase()}`}
      className='category-item__container'
    >
      <div
        className='category-item__image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='category-item__text-box'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  )
}

export default CategoryItem
