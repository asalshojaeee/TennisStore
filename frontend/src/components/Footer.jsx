
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import logo1 from '../assets/logo/logo1.jpg'

const Footer = () => {


    return (


        <>

            <footer className="h-30 ">


                <div className="md:flex justify-center items-center gap-50 m-10  ">
                    <div>
                        <img src={logo1} alt="" className="w-30 h-30" />
                    </div>
                    <div className="text-slate-400 ">
                        <h4 className="text-md text-blue-400 font-bold">SHOP</h4>
                        <p>Rackets</p>
                        <p>Tennis balls</p>
                        <p>Shoes</p>
                    </div>

                    <div className="text-slate-400 ">
                        <h4 className="text-md text-blue-400 font-bold">SUPPORT</h4>
                        <p>Contact Us</p>
                        <p>Size Guide</p>
                        <p>Racket Stringing
                        </p>

                    </div>




                    <div className="text-slate-400 ">
                        <h4 className="text-md text-blue-400 font-bold">RESOURCES</h4>
                        <p>Find a Store</p>
                        <p>Become a Member</p>
                        <p>Feedback
                        </p>

                    </div>




                </div>
                <hr className="w-300 mx-auto text-slate-300" />


                <div className="md:flex justify-center items-center gap-10 mt-5 text-blue-300 p-5">
                    <span >© 2026 TennisStore. All rights reserved.</span>
                    <a href="#" >Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Cookies</a>


                    <div className="md:flex flex-row gap-5 text-slate-300">
                        <FaInstagram className="hover:text-slate-400 transition-all cursor-pointer"/>
                        <FaXTwitter className="hover:text-slate-400 transition-all cursor-pointer"/>
                        <MdOutlineMailOutline  className="hover:text-slate-400 transition-all cursor-pointer"/>

                    </div>




                </div>




            </footer>


        </>
    )

}


export default Footer