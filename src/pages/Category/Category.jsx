import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { CategoriesContext } from '../../contexts/CategoriesContext'
import ProductCard from '../../components/ProductCard/ProductCard'

function Category() {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <div>
      <h2>{category}</h2>
      <div className='category-preview__categories'>
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  )
}

export default Category
