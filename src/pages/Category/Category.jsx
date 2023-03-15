import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Category.css'
import { selectCategoriesMap } from '../../store/categories/categoriesSelector'

function Category() {
  const { category } = useParams()
  const categories = useSelector(selectCategoriesMap)

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(categories[category])
  }, [category, categories])

  return (
    <div className='category'>
      <h2 className='category__title'>{category}</h2>
      <div className='category__categories'>
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  )
}

export default Category
