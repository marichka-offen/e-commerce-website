import { Fragment, useContext } from 'react'
import { CategoriesContext } from '../../contexts/CategoriesContext'
import './Shop.css'
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview'

function Shop() {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <div className='shop'>
      {Object.keys(categoriesMap).map((category) => (
        <Fragment key={category}>
          <CategoryPreview
            category={category}
            products={categoriesMap[category]}
          />
        </Fragment>
      ))}
    </div>
  )
}

export default Shop
