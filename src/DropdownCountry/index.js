import {react} from 'react'
import { Button } from '@mui/material'
import { FaAngleDown } from "react-icons/fa";
import '../App.css'
const DropdownCountry = () => {
    return (
        <>
            <Button className= "Dropdown-Country">
                <div className="information d-flex flex-column">
                    <span className="label">Your Location</span>
                    <span className="name">India</span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>
            </>
    )
}

export default DropdownCountry