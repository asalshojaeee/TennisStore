
import { FiSearch } from "react-icons/fi";
import { PiSignInFill } from "react-icons/pi";

import { Link } from 'react-router-dom'

import { GiTennisRacket } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import logo from '../assets/logo/logo.png'

const Header = () => {


    return (
        <>

            <section className="flex justify-between mt-3  items-center">


                <Link to={'/'}>
                    <GiTennisRacket className="w-16 h-16 text-blue-200 mx-5" />

                </Link>
                <div>

                </div>

                <div className="flex justify-between items-center p-5 gap-3">
                    <div className="text-xl w-13 shadow-2xl bg-blue-400 h-10 flex items-center justify-center rounded-full text-white">
                        <FiSearch className="cursor-pointer" />

                    </div>
                    <input className="w-full p-2 text-gray-500 outline-none" type="text" placeholder="Search product here..." />
                    <HiOutlineShoppingBag className="text-blue-400 w-10 h-10 cursor-pointer" />

                    <PiSignInFill className="text-blue-400 w-10 h-10 cursor-pointer" />
                </div>










            </section>
        </>
    )

}

export default Header