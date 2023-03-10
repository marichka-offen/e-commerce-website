import ProductCard from '../ProductCard/ProductCard'
import './CategoryPreview.css'
import { Link } from 'react-router-dom'

function CategoryPreview({ category, products }) {
  return (
    <div className='category-preview'>
      <Link
        to={`/shop/${category.toLowerCase()}`}
        className='category-preview__title'
      >
        <span>{category}</span>
        <span>&#10144;</span>
      </Link>
      <div className='category-preview__categories'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  )
}

export default CategoryPreview
