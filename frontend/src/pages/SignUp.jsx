


import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";



import { Link, useNavigate } from 'react-router-dom'
import logo1 from '../assets/logo/logo1.jpg'
import { useState } from "react";
import axios from 'axios'
const SignUp = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);


    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""


    })




    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })

    }

    const handleForm = async (e) => {
        e.preventDefault();

        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:3000/api/signup",
                data
            );

            console.log(response.data);
        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    };

    return (
        <>

            <div className="mt-10 ">
                <div className="bg-blue-200 w-100 h-130 mx-auto p-5 rounded-lg">
                    <img src={logo1} alt="" className="w-30 h-30 object-scale-down mix-blend-multiply mx-auto" />
                    <div className=" mt-3">

                        <form action="" className="flex flex-col gap-5" onSubmit={handleForm}>
                            <input
                                onChange={handleChange}
                                name="name"
                                required
                                value={data.name}
                                type="text" placeholder="Name" className="h-10 p-2 text-sm  outline-none  rounded-sm opacity-40 focus:bg-white focus:opacity-40 transition-all  bg-white" />

                            <input type="email"
                                onChange={handleChange}

                                name="email"
                                value={data.email}
                                placeholder="Email" className="h-10 p-2 text-sm  outline-none  rounded-sm opacity-40 focus:bg-white focus:opacity-40 transition-all  bg-white" />
                            <div className="flex justify-center items-center opacity-40 focus:bg-white focus:opacity-40 transition-all  bg-white rounded-sm">
                                <input
                                    onChange={handleChange}

                                    name="password"
                                    value={data.password}

                                    type={showPassword ? "text" : "password"} placeholder="Password" className="h-10 w-full p-2 text-sm  outline-none   " />

                                <span


                                    onClick={() => setShowPassword(preve => !preve)}

                                >
                                    {showPassword ? (<VscEye />) : (<VscEyeClosed />)}
                                </span>

                            </div>

                            <div className="flex justify-center items-center opacity-40 focus:bg-white focus:opacity-40 transition-all  bg-white rounded-sm">
                                <input type={showConfirmPassword ? "Text" : "password"}
                                    onChange={handleChange}

                                    value={data.confirmPassword}
                                    name="confirmPassword"
                                    placeholder="Confirm password" className="h-10 p-2 text-sm  outline-none w-full" />
                                <span


                                    onClick={() => setshowConfirmPassword(preve => !preve)}

                                >
                                    {showConfirmPassword ? (<VscEye />) : (<VscEyeClosed />)}
                                </span>
                            </div>



                            <button className="mt-5 cursor-pointer font-semibold text-white">Sign Up</button>


                        </form>

                        <div className='text-gray-400 mt-10 text-sm'>
                            <Link to={'/login'} >Do you have already acoount? Login</Link>


                        </div>

                    </div>
                </div>

            </div>


        </>
    )

}


export default SignUp
