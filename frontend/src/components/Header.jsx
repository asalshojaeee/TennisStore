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
import { use, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import MobileMenu from './MobileMenu';
import '../assets/style/header.css'
import Context from '../context';



const Header = () => {
    const user = useSelector(state => state?.user?.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [search, setSearch] = useState("")

    const [openMenu, setOpenMenu] = useState(false)



    const handleLogOut = async () => {
        const response = await axios.get("http://localhost:3000/api/logout", {
            withCredentials: true
        })

        if (response.data.success) {
            dispatch(setUserDetails(null));
            navigate("/");
        }
    };
    const handleSearch = (e) => {
        const res = e.target.value;
        setSearch(res);
        navigate(`/search?q=${res}`)

    }
    return (
        <>

            <section className="flex justify-between items-center px-2 md:px-6">

                <Link to={'/'} >
                    <img src={logo1} alt=""
                        className="w-20 h-20 md:w-30 md:h-30"
                    />
                </Link>


                <div className="hidden md:flex z-40">
                    <ul className="flex gap-5 text-blue-500 font-bold">

                        <li className="relative group cursor-pointer list-none ">
                            Men

                            <ul className="absolute p-6 left-0 top-full hidden group-hover:flex flex-col bg-white opacity-80 shadow-lg rounded-md text-blue-400 font-medium w-48">
                                <li>
                                    <Link className="block py-2" to="/sneakers">
                                        Sneakers
                                    </Link>
                                </li>
                                <li>
                                    <Link className="block py-2" to="/menclothe">
                                        Clothes
                                    </Link>
                                </li>
                                <li className="relative group/accessory">
                                    <div className="flex items-center cursor-pointer">
                                        Accessories
                                        <MdNavigateNext className="ml-2 text-2xl font-bold text-blue-600" />
                                    </div>

                                    <div className="absolute text-blue-600 left-full top-0 rounded-md  hidden group-hover/accessory:block bg-white shadow-lg p-6">
                                        <ul className='flex flex-row items-center justify-center gap-8 '>
                                            <Link to={'/hat'}> <li>Hat</li></Link>
                                            <Link to={'/bag'}><li>Bag</li></Link>
                                            <Link to={'/socks'}><li>Socks</li></Link>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li className="relative group cursor-pointer list-none ">
                            Women

                            <ul className="absolute p-6 left-0 top-full hidden group-hover:flex flex-col bg-white opacity-80 shadow-lg rounded-md text-blue-400 font-medium w-48">
                                <li>
                                    <Link className="block py-2" to="/sneakers">
                                        Sneakers
                                    </Link>
                                </li>
                                <li>
                                    <Link className="block py-2" to="/womenclothe">
                                        Clothes
                                    </Link>
                                </li>
                                <li className="relative group/accessoryWomen">
                                    <div className="flex items-center cursor-pointer">
                                        Accessories
                                        <MdNavigateNext className="ml-2 text-2xl font-bold text-blue-600" />
                                    </div>

                                    <div className="absolute text-blue-600 left-full top-0 rounded-md  hidden group-hover/accessoryWomen:block bg-white shadow-lg p-6">
                                        <ul className='flex flex-row items-center justify-center gap-8 '>
                                            <Link to={'/hat'}> <li>Hat</li></Link>
                                            <Link to={'/bag'}><li>Bag</li></Link>
                                            <Link to={'/socks'}><li>Socks</li></Link>
                                        </ul>
                                    </div>

                                </li>
                            </ul>
                        </li>
                        <li className="relative group cursor-pointer list-none ">
                            Sport

                            <ul className="absolute p-6 left-0 top-full hidden group-hover:flex flex-col bg-white opacity-80 shadow-lg rounded-md text-blue-400 font-medium w-48">
                                <li>
                                    <Link className="" to={'/rackets'}>Racket</Link>
                                </li>
                                <li><Link className="" to={'/balls'}>Ball</Link></li>
                                <li><Link className="" to={'/sneakers'}>Sneakers</Link></li>
                            </ul>
                        </li>

                    </ul>
                </div>








                <div className="flex items-center gap-2 px-2 md:gap-7 md:px-6">
                    <div className="hidden md:flex justify-between items-center border border-blue-100 rounded-xl gap-3 p-1">
                        <FiSearch className="cursor-pointer w-6 h-6 text-blue-300" />
                        <input
                            value={search}
                            onChange={handleSearch}
                            className="w-80  p-2 transition-all  text-gray-500 outline-none " type="text" placeholder="Search product" />
                    </div>

                    <div className="hidden md:flex justify-center items-center">
                        {
                            user?.role === "ADMIN" && (
                                <Link to={'/adminpanel'}>
                                    <CiUser className="w-6 h-6 cursor-pointer text-blue-400" />
                                </Link>

                            )
                        }

                    </div>


                    {
                        user?._id ? (

                            <>
                                <Link
                                    to="/cart"
                                    className="p-2 text-2xl cursor-pointer"
                                >


                                    <div className='relative text-center'>
                                        <p className='absolute w-4 h-5 text-sm top-0 mx-auto bg-red-600 rounded-full text-white'>{Context?.count}</p>
                                        <CiShoppingCart className="text-blue-400 w-10 h-10 cursor-pointer" />


                                    </div>
                                </Link>
                                <button onClick={handleLogOut} className="bg-red-500 p-2 hover:translate-y-0.5 transition-all rounded-lg text-white cursor-pointer"
                                >
                                    LogOut
                                </button>
                            </>

                        ) :

                            (<Link to={'/login'} className="bg-blue-300 p-2 rounded-lg text-white cursor-pointer"
                            >
                                Login
                            </Link>)

                    }



                    <div className="md:hidden"
                    >
                        <IoMenuOutline

                            onClick={() => setOpenMenu(true)}
                            className="w-10 h-10 cursor-pointer" />
                        <MobileMenu open={openMenu} setOpen={setOpenMenu} />
                    </div>
                </div>



            </section>


        </>
    )

}

export default Header