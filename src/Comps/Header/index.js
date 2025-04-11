import {react} from 'react'
import Logo from '../../Assets/Images/logo2.png'
import {Link} from 'react-router-dom'
import { Button } from '@mui/material'
import DropdownCountry from '../../DropdownCountry'
import { FiUser } from 'react-icons/fi'
import { FaShoppingCart } from 'react-icons/fa'
import SearchBar from './SearchBar'
const Header = () => {
    return (
        <>
          <div class="HeaderWrap">

                <div class="top-part background-darkBlue">
                    <div class="text-container">
                        <p className="mb-0 mt-0 text-center">Because of tarrifs in the U.S and 
                            the COVID 19 Pandemic, many orders will be delayed.
                        </p>
                    </div>
                </div>

                <header className="web-header">
                    <div className="text-container">
                        <div className="row">
                            <div className="logoWrap d-flex align-items-center col-sm-2">
                                <Link to="/"><img src={Logo} alt="Logo"/></Link>
                            </div>

                            <div className=" col-sm-10 d-flex align-items-center part2"> 
                                <DropdownCountry />
                                {/* Beginning of Search Bar*/}
                                <SearchBar />
                                {/*End of Search Bar */}
                                <div className="d-flex align-items-center part3">
                                    <Button className="circle"><FiUser/></Button>
                                    <div className=" ml-auto TabCart d-flex align-items-center ">
                                        <span className="price">$5.87</span>
                                        <div className="position-relative ml-2">
                                            <Button className="circle ml-2"><FaShoppingCart /></Button>
                                            <span 
                                                className="count 
                                                d-flex 
                                                align-items-center
                                                justify-content-center"
                                            >
                                                1
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </header>

                <nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 navbarPart1">
                                <Button className="allCategoriesTab">
                                    <span class="text">ALL CATEGORIES</span>
                                </Button>
                            </div>

                            <div className="col-sm-9 navbarPart2">

                            </div>
                        </div>
                    </div>
                </nav>
           </div>
        </>
    )
}

export default Header