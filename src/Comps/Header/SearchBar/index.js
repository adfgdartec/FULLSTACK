import { Button } from "@mui/material"
import { IoSearch } from "react-icons/io5"
const SearchBar = () => {
    return (
        <>
        <div className="HeaderSearchBar ml-3 mr-3">
            <input type="text" placeholder=' Search For Products... '/>
            <Button><IoSearch /></Button>
        </div>
        </>
    )
}
export default SearchBar