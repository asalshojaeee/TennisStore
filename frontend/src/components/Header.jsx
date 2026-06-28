
import { FiSearch } from "react-icons/fi";
import { PiSignInFill } from "react-icons/pi";

import { Link } from 'react-router-dom'
import logo1 from '../assets/logo/logo1.jpg'
import { GiTennisRacket } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const Header = () => {


    return (
        <>

            <section className="flex justify-between  items-center">


                <Link to={'/'} >
                    <img src={logo1} alt="" className="w-30 h-30" />
                </Link>
                <div className="flex justify-center items-center flex-row gap-5">
                    <li className="list-none cursor-pointer text-blue-400 font-bold">Men</li>
                    <li className="list-none cursor-pointer text-blue-400 font-bold">Women</li>
                    <li className="list-none cursor-pointer text-blue-400 font-bold">Kids</li>
                    <li className="list-none cursor-pointer text-blue-400 font-bold">Sport</li>
                </div>

                <div className="flex justify-between  items-center px-17 gap-6 ">
                    <div className="text-xl w-13 shadow-2xl bg-blue-400 h-10 flex items-center justify-center rounded-l-full text-white">
                        <FiSearch className="cursor-pointer" />
                    </div>
                    <input className="w-full  p-2  transition-all  text-gray-500 outline-none" type="text" placeholder="Search product here..." />
                    <HiOutlineShoppingBag className="text-blue-400 w-15 h-15 cursor-pointer" />

                    <button className="bg-blue-300 p-2 rounded-lg text-white cursor-pointer">
                        Login
                    </button>
                </div>



            </section>


        </>
    )

}

export default Header