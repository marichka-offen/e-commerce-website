import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Shop.css'

function Shop() {
  const { products } = useContext(ProductsContext)
  return (
    <div className='shop'>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}

export default Shop
