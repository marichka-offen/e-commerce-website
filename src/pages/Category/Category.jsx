import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { CategoriesContext } from '../../contexts/CategoriesContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Category.css'

function Category() {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

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
