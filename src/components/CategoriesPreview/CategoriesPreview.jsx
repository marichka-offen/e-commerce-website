import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import './CategoriesPreview.css'
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview'

function CategoriesPreview() {
  const categories = useSelector((state) => state.categories.categories)

  return (
    <div className='categories-preview'>
      {Object.keys(categories).map((category) => (
        <Fragment key={category}>
          <CategoryPreview
            category={category}
            products={categories[category]}
          />
        </Fragment>
      ))}
    </div>
  )
}

export default CategoriesPreview
