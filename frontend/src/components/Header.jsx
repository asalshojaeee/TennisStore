
import { FiSearch } from "react-icons/fi";
import { PiSignInFill } from "react-icons/pi";

import { Link } from 'react-router-dom'

import { GiTennisRacket } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import logo from '../assets/logo/logo.png'
function TennisBallIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle cx="16" cy="16" r="15" fill="#C8E63B" stroke="#A8C520" strokeWidth="1" />
            <path
                d="M4.5 10.5C8 9.5 11 6.5 11 1.5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M27.5 10.5C24 9.5 21 6.5 21 1.5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M4.5 21.5C8 22.5 11 25.5 11 30.5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M27.5 21.5C24 22.5 21 25.5 21 30.5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
            />
        </svg>
    );
}

const Header = () => {


    return (
        <>

            <section className="flex justify-between mt-3  items-center">


                <Link to={'/'} className="px-4">
                    <TennisBallIcon className="w-9 h-9 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="flex flex-col leading-none">
                        <span className="font-black text-lg tracking-tight text-blue-400">ACE</span>
                        <span className="font-light text-[10px] tracking-[0.2em] text-green-500 uppercase">Tennis</span>
                    </div>

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
                    <HiOutlineShoppingBag className="text-blue-400 w-10 h-10 cursor-pointer" />

                    <h6 className="">
                        Sign in
                    </h6>
                </div>



            </section>

  
        </>
    )

}

export default Header