

import { useSelector } from 'react-redux'
import React, { use, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export const AdminPanel = () => {

    const user = useSelector(state => state?.user.user)

    const navigate = useNavigate()


    useEffect(() => {
        if (user?.role !== "ADMIN") {
            navigate("/")

        }
    }, [user])


    const handleSubmit = () => {

    }



    return (

        <>

            <main className='flex gap-5'>
                <div className='h-screen w-50 bg-blue-300'>
                    <h1 className='text-white font-bold text-center p-5'>{user?.name}</h1>
                    <p className='text-green-100 text-center'>{user?.role}</p>
                    <div className='flex justify-center items-center flex-col mt-100 gap-6'>
                        <Link className='text-green-100'>All User</Link>
                        <Link className='text-green-100'>All Product</Link>
                    </div>

                </div>
                <div>
                    <form action="" className='flex flex-col'>
                        <label htmlFor="productName">Name:</label>
                        <input id="productName" type="text" placeholder="" />



                        <label htmlFor="category">Category:</label>
                        <input id="category" type="text" placeholder="" />

                        <label htmlFor="price">Price:</label>
                        <input id="price" type="text" placeholder="" />

                        <label htmlFor="brandName">BrandName:</label>
                        <input id="brandName" type="text" placeholder="" />

                        <label htmlFor="sellingPrice">SellingPrice:</label>
                        <input id="sellingPrice" type="text" placeholder="" />

                        <label htmlFor="description">Description:</label>
                        <textarea name="" id="description" cols='9' rows={7}></textarea>
                        <input type="file" placeholder="" />
                    </form>
                </div>

            </main>



        </>
    )
}


export default AdminPanel
