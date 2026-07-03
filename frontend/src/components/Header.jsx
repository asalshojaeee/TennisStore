
import { FiSearch } from "react-icons/fi";
import { PiSignInFill } from "react-icons/pi";
import { IoMenuOutline } from "react-icons/io5";

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
                <div className="hidden md:flex justify-center items-center flex-row gap-5">
                    <li className="list-none cursor-pointer text-blue-400 font-bold">Men</li>
                    <li className="list-none cursor-pointer text-blue-400 font-bold">Women</li>
                    <li className="list-none cursor-pointer text-blue-400 font-bold">Kids</li>
                    <li className="list-none cursor-pointer text-blue-400 font-bold">Sport</li>
                </div>

                <div className="flex justify-between  items-center px-17 gap-6 ">
                    <div className="hidden md:flex justify-between items-center border border-blue-100 rounded-xl gap-3 p-1">
                        <FiSearch className="cursor-pointer w-6 h-6 text-blue-300" />
                        <input className="w-80  p-2 transition-all  text-gray-500 outline-none" type="text" placeholder="Search product ..." />
                    </div>

                    <HiOutlineShoppingBag className="text-blue-400 w-8 h-8 cursor-pointer" />

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