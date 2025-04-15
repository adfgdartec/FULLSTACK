import {Link} from 'react-router-dom'
import { Button } from '@mui/material'

const Navigation = () => {
  return (
    <nav>
         <div className="container">
             <div className="row">
                  <div className="col-sm-3 navbarPart1">
                      <Button className="allCategoriesTab">
                          <span class="text">ALL CATEGORIES</span>
                        </Button>
                  </div>

                  <div className="col-sm-9 navbarPart2">
                       <ul className=" list-inline-item">
                          <li className=" list-inline">
                            <Link to="/">Home</Link>
                          </li>
                          <li className=" list-inline-item">
                            <Link to="/">Shop</Link>
                          </li>
                          <li className=" list-inline-item">
                            <Link to="/">Computers</Link>
                          </li>
                          <li className=" list-inline-item">
                            <Link to="/">Computer Components</Link>
                          </li>
                          <li className=" list-inline-item">
                            <Link to="/">Tablets</Link>
                          </li>
                          <li className=" list-inline-item">
                            <Link to="/">About</Link>
                          </li>
                          <li className=" list-inline-item">
                            <Link to="/">Contact Us</Link>
                          </li>
                      </ul>
                  </div>
            </div>
      </div>
  </nav>
  )
}
