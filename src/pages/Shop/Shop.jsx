import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../../components/CategoriesPreview/CategoriesPreview'
import Category from '../Category/Category'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCategoriesAndDocuments } from '../../utils/firebase'
import { setCategories } from '../../store/categories/categoriesAction'

function Shop() {
  const dispatch = useDispatch()

  // get categories from firestore
  useEffect(() => {
    // addCollectionAndDocuments('categories', SHOP_DATA)
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments()
      dispatch(setCategories(categories))
    }
    getCategoriesMap()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop
