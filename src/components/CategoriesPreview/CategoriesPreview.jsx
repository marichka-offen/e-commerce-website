import { Fragment, useContext } from 'react'
import { CategoriesContext } from '../../contexts/CategoriesContext'
import './CategoriesPreview.css'
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview'

function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <div className='categories-preview'>
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

export default CategoriesPreview
