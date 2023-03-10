import ProductCard from '../ProductCard/ProductCard'
import './CategoryPreview.css'

function CategoryPreview({ category, products }) {
  return (
    <div className='category-preview'>
      <h2 className='category-preview__title'>{category}</h2>
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
