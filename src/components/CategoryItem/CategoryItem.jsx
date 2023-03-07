import './CategoryItem.css'

function CategoryItem({ category: { imageUrl, title } }) {
  return (
    <div className='category-item__container'>
      <div
        className='category-item__image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='category-item__text-box'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItem
