
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { Link, useNavigate } from 'react-router-dom'
import logo1 from '../assets/logo/logo1.jpg'
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);

    const [data, setData] = useState({
        email: "",
        password: ""
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataResponse = await axios.post("http://localhost:3000/api/login", data)


            if (dataResponse.data.success) {
                toast.success(dataResponse.data.message)
                navigate('/')

            }

            if (dataResponse.data.error) {
                toast.error(dataResponse.data.message)
            }

        }
        catch (err) {
            console.log(err.message);

        }
    }
    const handleChange = async (e) => {

        const { name, value } = e.target;
        setData((preve => {
            return {
                ...preve,
                [name]: value

            }

        }))

    }
    return (
        <>

            <div className="mt-10 ">
                <div className="bg-blue-200 w-100 h-110 mx-auto p-5 rounded-lg">
                    <img src={logo1} alt="" className="w-30 h-30 object-scale-down mix-blend-multiply mx-auto" />
                    <div className=" mt-3">

                        <form
                            onSubmit={handleSubmit}

                            action="" className="flex flex-col gap-5">
                            <input
                                name="email"
                                value={data.email}

                                onChange={handleChange}
                                type="email" placeholder="Email" className="h-10 ou p-2 text-sm outline-none bg-white rounded-sm  opacity-40" />



                            <div className="flex justify-center items-center opacity-40 focus:bg-white focus:opacity-40 transition-all  bg-white rounded-sm">
                                <input
                                    value={data.password}
                                    onChange={handleChange}
                                    name="password"
                                    type={showPassword ? "text" : "password"} placeholder="Password" className="h-10 w-full p-2 text-sm  outline-none   " />

                                <span


                                    onClick={() => setShowPassword(preve => !preve)}

                                >
                                    {showPassword ? (<VscEye />) : (<VscEyeClosed />)}
                                </span>

                            </div>
                            <div className="text-center">
                                <button className="mt-5 w-70   p-2 border-0 bg-blue-400 hover:shadow-2xl hover:shadow-amber-50 transition-all hover:translate-y-1 rounded-md cursor-pointer font-semibold text-white">LogIn</button>

                            </div>

                        </form>

                        <div className="mt-10 text-sm text-gray-400" >
                            <Link to={'/signup'} >Haven't account? SignUp</Link>


                        </div>

                    </div>
                </div>

            </div>


        </>
    )


}


export default Login
