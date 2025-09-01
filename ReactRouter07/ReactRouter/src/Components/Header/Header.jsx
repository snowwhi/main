import { NavLink ,Link} from "react-router";
import React from "react";
function Header () {
    return (
        <>
        <header className="shadow border-gray-50 sticky top-0">
            <nav className="bg-white  px-4 border-gray-200 lg:px-6 ">
                <div className="flex flex-wrap  justify-between items-center mx-auto " >
                  <Link to= "/"
                  className="flex items-center"
                  >
                  <img 
                  className="h-20 w-24 object-cover "
                  src="https://images-platform.99static.com//EKUlSbsiedQBW2bBIVUOED2R-vg=/117x65:1122x1070/fit-in/500x500/99designs-contests-attachments/121/121740/attachment_121740866" alt="logo" />
                  </Link>
                   <div className="hidden justify-between items-center w-full lg:flex lg:w-auto"
                        id="mobile-menu-2">
                        <ul className="flex flex-row gap-6 mt-4 font-medium justify-between">
                            <li>
                                <NavLink to="/"
                                className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                >
                                    Home
                                </NavLink>
                            </li>
                             <li>
                                <NavLink to="/about"
                                className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                >
                                    About
                                </NavLink>
                            </li>
                             <li>
                                <NavLink to="/contact"
                                className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                >
                                    Contact-us
                                </NavLink>
                            </li>
                             <li>
                                <NavLink to="/github"
                                className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center ">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                      <Link
                            to="#"
                            className=" text-white hover:bg-gray-100 hover:text-black  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none bg-orange-700 "
                        >
                            Get Started
                        </Link>
                    </div>
                   
                </div>
            </nav>
        </header>
        
        </>
    );

}

export default Header ;