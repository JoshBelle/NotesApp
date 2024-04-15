import { useDispatch } from "react-redux"
import { setFilter } from "../redux/filterSlice"

const CategoriesItem = ({ item }) => {
  
  const dispatch = useDispatch()

  const handleCategory = (category) => {
    dispatch(setFilter(category))
  }

  


  return (
    <div>
        <button onClick={() => handleCategory(item)}  className='px-4 py-2 border border-1 border-blue-500 rounded-lg'>{item}</button>
    </div>
  )
}

export default CategoriesItem
