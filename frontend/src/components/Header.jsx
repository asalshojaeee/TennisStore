
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


                <div className="hidden md:flex z-40">
                    <ul className="flex gap-5 text-green-600 font-bold">

                        <li className="relative group cursor-pointer list-none ">
                            Men

                            <ul className="absolute p-10 left-0   top-full hidden group-hover:block bg-white opacity-80 shadow-lg  rounded-md text-blue-400 font-medium">
                                <Link className="m-3 ">Shoes</Link>
                                <Link className="m-3 ">Clothes</Link>
                                <Link className="m-3 ">Accessories</Link>
                            </ul>
                        </li>

                        <li className="relative group cursor-pointer list-none ">
                            Women

                            <ul className="absolute p-10 left-0   top-full hidden group-hover:block bg-white opacity-80 shadow-lg  rounded-md text-blue-400 font-medium">
                                <Link className="m-3 ">Shoes</Link>
                                <Link className="m-3 ">Clothes</Link>
                                <Link className="m-3 ">Accessories</Link>
                            </ul>
                        </li>
                        <li className="relative group cursor-pointer list-none ">
                            Sport

                            <ul className="absolute p-10 left-0   top-full hidden group-hover:block bg-white opacity-80 shadow-lg  rounded-md text-blue-400 font-medium">
                                <Link className="m-3 ">Racket</Link>
                                <Link className="m-3 ">Ball</Link>
                                <Link className="m-3 ">Shoes</Link>
                            </ul>
                        </li>

                    </ul>
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