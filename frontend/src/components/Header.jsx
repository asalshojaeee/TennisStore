import gsap from 'gsap'
import { FiSearch } from "react-icons/fi";
import { PiSignInFill } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux'
import { data, Link, useNavigate } from 'react-router-dom'
import logo1 from '../assets/logo/logo1.jpg'
import { GiTennisRacket } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import axios from 'axios'
import { setUserDetails } from "../store/userSlice";
import { use } from "react";
import { MdNavigateNext } from "react-icons/md";
import '../assets/style/header.css'
const Header = () => {
    const user = useSelector(state => state?.user?.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()



    const handleLogOut = async () => {
        const response = await axios.get("http://localhost:3000/api/logout", {
            withCredentials: true
        })

        if (response.data.success) {
            dispatch(setUserDetails(null));
            navigate("/");
        }
    };

    return (
        <>

            <section className="flex justify-between  items-center">


                <Link to={'/'} >
                    <img src={logo1} alt="" className="w-30 h-30" />
                </Link>


                <div className="hidden md:flex z-40">
                    <ul className="flex gap-5 text-blue-500 font-bold">

                        <li className="relative group cursor-pointer list-none ">
                            Men

                            <ul className="absolute p-10 left-0   top-full hidden group-hover:flex flex-col bg-white opacity-80 shadow-lg  rounded-md text-blue-400 font-medium">
                                <Link className="m-3 " to={'/sneakers'}>Sneakers</Link>
                                <Link className="m-3 " to={'/menclothe'}>Clothes</Link>
                                <li className="relative group/accessory">
                                    <div className="flex items-center cursor-pointer">
                                        Accessories
                                        <MdNavigateNext className="ml-2 text-2xl font-bold text-blue-600" />
                                    </div>

                                    <div className="absolute text-blue-600 left-full top-0 rounded-md  hidden group-hover/accessory:block bg-white shadow-lg p-6">
                                        <ul className='flex flex-row items-center justify-center gap-8 '>
                                            <li>Hat</li>
                                            <li>Bag</li>
                                            <li>Socks</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li className="relative group cursor-pointer list-none ">
                            Women

                            <ul className="absolute p-10 left-0   top-full hidden group-hover:flex flex-col bg-white opacity-80 shadow-lg  rounded-md text-blue-400 font-medium">
                                <Link className="m-3 " to={'/sneakers'}>Sneakers</Link>
                                <Link className="m-3 " to={'/womenclothe'}>Clothes</Link>
                                <div className='flex justify-center items-center'>
                                    <Link className="m-3 ">Accessories</Link>
                                    <MdNavigateNext className='text-2xl font-bold text-green-600' />

                                </div>
                            </ul>
                        </li>
                        <li className="relative group cursor-pointer list-none ">
                            Sport

                            <ul className="absolute p-10 left-0   top-full hidden group-hover:flex flex-col bg-white opacity-80 shadow-lg  rounded-md text-blue-400 font-medium">
                                <Link className="m-3 " to={'/rackets'}>Racket</Link>
                                <Link className="m-3 " to={'/balls'}>Ball</Link>
                                <Link className="m-3 " to={'/sneakers'}>Sneakers</Link>
                            </ul>
                        </li>

                    </ul>
                </div>








                <div className="flex justify-between  items-center px-17 gap-7 ">
                    <div className="hidden md:flex justify-between items-center border border-blue-100 rounded-xl gap-3 p-1">
                        <FiSearch className="cursor-pointer w-6 h-6 text-blue-300" />
                        <input className="w-80  p-2 transition-all  text-gray-500 outline-none " type="text" placeholder="Search product" />
                    </div>

                    <div className="flex justify-center items-center">

                        {
                            user?.role === "ADMIN" && (
                                <Link to={'/adminpanel'}>
                                    <CiUser className="w-6 h-6 cursor-pointer text-blue-400" />
                                </Link>

                            )
                        }
                        {
                            user?._id && (<CiShoppingCart className="text-blue-400 w-8 h-8 cursor-pointer" />
                            )
                        }
                    </div>


                    {
                        user?._id ? (<button onClick={handleLogOut} className="bg-red-500 p-2 hover:translate-y-0.5 transition-all rounded-lg text-white cursor-pointer"
                        >
                            LogOut
                        </button>) :

                            (<Link to={'/login'} className="bg-blue-300 p-2 rounded-lg text-white cursor-pointer"
                            >
                                Login
                            </Link>)

                    }



                    <div className="md:hidden"
                    // onClick={handleMenu}
                    >
                        <IoMenuOutline className="w-10 h-10" />

                    </div>
                </div>



            </section>


        </>
    )

}

export default Header