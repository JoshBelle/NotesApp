import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/searchSlice";
import AddPanel from "./AddPanel/AddPanel";
import { setOpen } from "../redux/modalAddSlice";



const SearchAddPanel = () => {
  const dispatch = useDispatch()
  
    const openState = useSelector((state) => state.open)

    console.log(openState)

    return (
        <div
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="flex gap-[12px]"
        >
            <input
                className="px-4 py-2 border border-1 border-blue-500 rounded-lg"
                placeholder="Search for..."
            />
            <button onClick={() => dispatch(setOpen(!false))}  className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Add New
            </button>

            {openState && <AddPanel />}
            
        </div>
    );
};

export default SearchAddPanel;
