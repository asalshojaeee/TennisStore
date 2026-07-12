

import { useSelector } from 'react-redux'
import React, { use, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

import {axios} from 'axios'
export const AdminPanel = () => {

    const user = useSelector(state => state?.user.user)

    const navigate = useNavigate()


    useEffect(() => {
        if (user?.role !== "ADMIN") {
            navigate("/")

        }
    },[user])




    const fetchProduct=async()=>{

        const responseData=await axios.post('http://localhost:3000/api/uploadproduct',data)

    }

    return (

        <>
        
        
        
        
        </>
    )
}
