
import axios from 'axios'

import { useSelector } from 'react-redux'
import React, { use, useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { IoCloudUploadOutline } from "react-icons/io5";
import productCategory from '../helpers/productCategory'
export const AdminPanel = () => {

    const [data,setData]=useState({
        
    })

    const user = useSelector(state => state?.user.user)

    const navigate = useNavigate()


    useEffect(() => {
        if (user?.role !== "ADMIN") {
            navigate("/")

        }
    }, [user])

    const handleOnChange = (e) => {
        const { name, value } = e.target;


    }
    const handleSubmit = async () => {


        const responseData = await axios.post("http://localhost:3000/api/uploadproduct", data, {
            withCredentials: true
        })

    }
    const handleUploadProduct = () => {

    }


    return (

        <>

            <main className='flex gap-5  bg-blue-100'>
                <div className='h-screen w-50 bg-blue-300'>
                    <h1 className='text-white font-bold text-center p-5'>{user?.name}</h1>
                    <p className='text-green-100 text-center'>{user?.role}</p>
                    <div className='flex justify-center items-center flex-col mt-100 gap-6'>
                        <Link className='text-green-100'>All User</Link>
                        <Link className='text-green-100'>All Product</Link>
                    </div>

                </div>
                <div className='mt-10 flex gap-20 text-slate-400'>
                    <form action="" className='flex flex-col gap-5 p-5' onSubmit={handleSubmit}>
                        <label htmlFor="productName">Name:</label>
                        <input id="productName" className='bg-slate-100 opacity-55 h-10 rounded-sm w-100' type="text" placeholder="" />



                        <label htmlFor="category">Category:</label>
                        <select name="" id="category" className='text-slate-400'>


                            <option>Select Category</option>
                            {productCategory.map((pro, index) => {
                                return (
                                    <option key={index} value={pro.value}>{pro.lable}</option>
                                )

                            })}
                        </select>

                        <label htmlFor="price">Price:</label>
                        <input id="price" className='bg-slate-100 opacity-55 h-10 rounded-sm w-100' type="text" placeholder="" />

                        <label htmlFor="brandName">BrandName:</label>
                        <input id="brandName" className='bg-slate-100 opacity-55 h-10 rounded-sm w-100' type="text" placeholder="" />

                        <label htmlFor="sellingPrice">SellingPrice:</label>
                        <input id="sellingPrice" className='bg-slate-100 opacity-55 h-10 rounded-sm w-100' type="text" placeholder="" />

                        <label htmlFor="description">Description:</label>
                        <textarea name="" className='bg-slate-100 opacity-55 h-10 rounded-sm w-100' id="description" cols='9' rows={7}></textarea>


                        <label htmlFor="uploadImageInput">

                            <div className="p-2 cursor-pointer rounded h-32 w-full flex justify-center items-center">

                                <div className="text-slate-500 flex justify-center items-center flex-col gap-2">
                                    <span className="text-3xl">
                                        <IoCloudUploadOutline className='text-blue-400' />
                                    </span>
                                    <p className="text-sm">Upload Product Image</p>
                                    <input
                                        onChange={handleUploadProduct}
                                        type="file" id="uploadImageInput" className="hidden" />

                                </div>

                            </div>
                        </label>

                    </form>
                </div>

            </main>



        </>
    )
}


export default AdminPanel
