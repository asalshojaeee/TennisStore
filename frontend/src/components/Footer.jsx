
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import logo1 from '../assets/logo/logo1.jpg'

const Footer = () => {


    return (


        <>

            <footer>


                <div className="w-full h-30 bg-white ">


                    <div className="flex gap-50 justify-center items-center mt-5">


                        <div className="flex flex-row p-5 gap-5">
                            {/* <MdOutlineMailOutline className="text-blue-400 text-lg" />
                            <FaInstagram className="text-blue-400 text-lg" />

                            <FaXTwitter className="text-blue-400 text-lg" /> */}
                        </div>
                        <div>
                            <img src={logo1} alt="" className="w-30 h-30" />

                        </div>
                        <div className="text-center">


                            <h5 className="text-blue-400 text-lg p-2 font-semibold ">Shop</h5>
                            <p className="text-green-500">Rackets</p>
                            <p className="text-green-500">Tennis Balls</p>

                            <p className="text-green-500">Shoes & Footwear</p>
                        </div>
                        <div className="text-center">


                            <h5 className="text-blue-400 p-2 text-lg font-semibold">Support</h5>
                            <p className="text-green-500">Rackets</p>
                            <p className="text-green-500">Tennis Balls</p>

                            <p className="text-green-500">Shoes & Footwear</p>
                        </div>


                    </div>
                    <hr className="w-300 mx-auto" />

                    <div>
                        <div>
                            <span >© 2025 AceSport. All rights reserved.</span>
                            <a href="#" >Privacy</a>
                            <a href="#" >Terms</a>
                            <a href="#" >Cookies</a>
                        </div>
                    </div>

                    <div className="flex flex-row p-5 gap-5">
                        <MdOutlineMailOutline className="text-blue-400 text-lg" />
                        <FaInstagram className="text-blue-400 text-lg" />

                        <FaXTwitter className="text-blue-400 text-lg" />
                    </div>
                </div>

            </footer>


        </>
    )

}


export default Footer