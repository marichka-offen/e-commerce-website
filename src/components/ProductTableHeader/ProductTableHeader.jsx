import './ProductTableHeader.css'

function ProductTableHeader() {
  return (
    <div className='product-table__header'>
      <div className='product-table__header-item'>Product</div>
      <div className='product-table__header-item'>Description</div>
      <div className='product-table__header-item'>Quantity</div>
      <div className='product-table__header-item'>Price</div>
      <div className='product-table__header-item'>Remove</div>
    </div>
  )
}

export default ProductTableHeader
