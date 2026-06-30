
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { Link } from 'react-router-dom'
import logo1 from '../assets/logo/logo1.jpg'
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);


    return (
        <>

            <div className="mt-10 ">
                <div className="bg-blue-100 w-100 h-110 mx-auto p-5 rounded-lg">
                    <img src={logo1} alt="" className="w-30 h-30 object-scale-down mix-blend-multiply mx-auto" />
                    <div className=" mt-3">

                        <form action="" className="flex flex-col gap-5">
                            <input type="email" placeholder="Email" className="h-10 ou p-2 text-sm outline-none bg-white rounded-sm  opacity-40" />



                            <div className="flex justify-center items-center opacity-40 focus:bg-white focus:opacity-40 transition-all  bg-white rounded-sm">
                                <input type={showPassword ? "text" : "password"} placeholder="Password" className="h-10 w-full p-2 text-sm  outline-none   " />

                                <span


                                    onClick={() => setShowPassword(preve => !preve)}

                                >
                                    {showPassword ? (<VscEye />) : (<VscEyeClosed />)}
                                </span>

                            </div>
                            <button className="mt-5 cursor-pointer font-semibold text-blue-500">Login</button>


                        </form>

                        <div className="mt-10 text-sm text-green-400" >
                            <Link to={'/signup'} >Haven't account? SignUp</Link>


                        </div>

                    </div>
                </div>

            </div>


        </>
    )


}


export default Login
