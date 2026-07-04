
import { FiSearch } from "react-icons/fi";
import { PiSignInFill } from "react-icons/pi";
import { IoMenuOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

import { Link } from 'react-router-dom'
import logo1 from '../assets/logo/logo1.jpg'
import { GiTennisRacket } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const Header = () => {
    const handleMenu = () => {

    }

    return (
        <>

            <section className="flex justify-between  items-center">


                <Link to={'/'} >
                    <img src={logo1} alt="" className="w-30 h-30" />
                </Link>



                <div className="hidden md:flex gap-5">
                    <nav className="relative">

                        <div className="max-w-7xl mx-auto flex justify-center items-center gap-10 h-16">

                            <div className="group">
                                <div className="cursor-pointer font-semibold text-gray-800 hover:text-black h-16 flex items-center">
                                    Men
                                </div>

                                <div
                                    className="
        absolute
        left-0
        top-full
        w-500
        bg-white
        shadow-xl
        opacity-0
        invisible
        -translate-y-5
        transition-all
        duration-300
        ease-out
        group-hover:opacity-100
        group-hover:visible
        group-hover:translate-y-0
        z-50
      "
                                >
                                    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12 py-10">

                                        <div>
                                            <h3 className="font-bold mb-4">Shoes</h3>

                                            <ul className="space-y-2 text-gray-500">
                                                <li className="hover:text-black cursor-pointer">Running</li>
                                                <li className="hover:text-black cursor-pointer">Basketball</li>
                                                <li className="hover:text-black cursor-pointer">Lifestyle</li>
                                                <li className="hover:text-black cursor-pointer">Training</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-bold mb-4">Clothing</h3>

                                            <ul className="space-y-2 text-gray-500">
                                                <li className="hover:text-black cursor-pointer">T-Shirts</li>
                                                <li className="hover:text-black cursor-pointer">Hoodies</li>
                                                <li className="hover:text-black cursor-pointer">Shorts</li>
                                                <li className="hover:text-black cursor-pointer">Pants</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-bold mb-4">Accessories</h3>

                                            <ul className="space-y-2 text-gray-500">
                                                <li className="hover:text-black cursor-pointer">Bags</li>
                                                <li className="hover:text-black cursor-pointer">Caps</li>
                                                <li className="hover:text-black cursor-pointer">Socks</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-bold mb-4">Featured</h3>

                                            <ul className="space-y-2 text-gray-500">
                                                <li className="hover:text-black cursor-pointer">New Arrivals</li>
                                                <li className="hover:text-black cursor-pointer">Best Sellers</li>
                                                <li className="hover:text-black cursor-pointer">Sale</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Women */}
                            <div className="group">
                                <div className="cursor-pointer font-semibold text-gray-800 hover:text-black h-16 flex items-center">
                                    Women
                                </div>

                                <div
                                    className="
        absolute
        left-0
        top-full
        w-full
        bg-white
        shadow-xl
        opacity-0
        invisible
        -translate-y-5
        transition-all
        duration-300
        ease-out
        group-hover:opacity-100
        group-hover:visible
        group-hover:translate-y-0
        z-50
      "
                                >
                                    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12 py-10">

                                        <div>
                                            <h3 className="font-bold mb-4">Shoes</h3>
                                            <ul className="space-y-2 text-gray-500">
                                                <li className="hover:text-black">Running</li>
                                                <li className="hover:text-black">Lifestyle</li>
                                                <li className="hover:text-black">Training</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-bold mb-4">Clothing</h3>
                                            <ul className="space-y-2 text-gray-500">
                                                <li>Leggings</li>
                                                <li>Jackets</li>
                                                <li>Tops</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-bold mb-4">Accessories</h3>
                                            <ul className="space-y-2 text-gray-500">
                                                <li>Bags</li>
                                                <li>Caps</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-bold mb-4">Featured</h3>
                                            <ul className="space-y-2 text-gray-500">
                                                <li>New</li>
                                                <li>Trending</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Sport */}
                            <div className="group">
                                <div className="cursor-pointer font-semibold text-gray-800 hover:text-black h-16 flex items-center">
                                    Sport
                                </div>

                                <div
                                    className="
        absolute
        left-0
        top-full
        w-full
        bg-white
        shadow-xl
        opacity-0
        invisible
        -translate-y-5
        transition-all
        duration-300
        ease-out
        group-hover:opacity-100
        group-hover:visible
        group-hover:translate-y-0
        z-50
      "
                                >
                                    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12 py-10">

                                        <div>
                                            <h3 className="font-bold mb-4">Running</h3>
                                            <ul className="space-y-2 text-gray-500">
                                                <li>Running Shoes</li>
                                                <li>Running Clothing</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-bold mb-4">Football</h3>
                                            <ul className="space-y-2 text-gray-500">
                                                <li>Boots</li>
                                                <li>Jerseys</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-bold mb-4">Basketball</h3>
                                            <ul className="space-y-2 text-gray-500">
                                                <li>Shoes</li>
                                                <li>Shorts</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-bold mb-4">Gym</h3>
                                            <ul className="space-y-2 text-gray-500">
                                                <li>Equipment</li>
                                                <li>Training</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </nav>


                </div>





                <div className="flex justify-between  items-center px-17 gap-6 ">
                    <div className="hidden md:flex justify-between items-center border border-blue-100 rounded-xl gap-3 p-1">
                        <FiSearch className="cursor-pointer w-6 h-6 text-blue-300" />
                        <input className="w-80  p-2 transition-all  text-gray-500 outline-none" type="text" placeholder="Search product ..." />
                    </div>

                    <CiShoppingCart className="text-blue-400 w-8 h-8 cursor-pointer" />

                    <Link to={'login'} className="bg-blue-300 p-2 rounded-lg text-white cursor-pointer"
                    >
                        Login
                    </Link>


                    <div className="md:hidden"
                        onClick={handleMenu}
                    >
                        <IoMenuOutline className="w-10 h-10" />

                    </div>
                </div>



            </section>


        </>
    )

}

export default Header