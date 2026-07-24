
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Layout from "./helpers/Layout"
import { BrowserRouter } from "react-router-dom"
import store from "./store/store"
import Login from './pages/Login'
import SignUp from "./pages/SignUp"
import Ball from "./pages/Ball"

import { ToastContainer, toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setUserDetails } from "./store/userSlice"
import AdminPanel from './pages/AdminPanel'
import Shoes from "./pages/Shoes"
import Racket from "./pages/Racket"
import MenClothes from "./pages/MenClothes"
import WomenClothes from "./pages/WomenClothes"
import Bag from "./pages/Bag"
import Hat from "./pages/Hat"
import Socks from "./pages/Socks"



function App() {

  const dispatch = useDispatch()
  const fetchUserDetail = async () => {


    try {
      const responseData = await axios.get('http://localhost:3000/api/userdetail', {
        withCredentials: true
      })

      if (responseData.data.success) {
        dispatch(setUserDetails(responseData.data.data))

      }
    }

    catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    fetchUserDetail();
  }, []);

  return (
    <>

      <Routes>

        <Route>


          <Route element={<Layout />}>

            <Route path="/" element={<Home />} />
            <Route path='/sneakers' element={<Shoes/>}/>
            <Route path="/balls" element={<Ball/>}/>
            <Route path="/rackets" element={<Racket/>}/>
            <Route path="/menclothe" element={<MenClothes/>}/>
            <Route path="/womenclothe" element={<WomenClothes/>}/>

            <Route path="/bag" element={<Bag/>}/>
            <Route path="/hat" element={<Hat/>}/>
            <Route path="/socks" element={<Socks/>}/>

          </Route>
        </Route>


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="adminpanel" element={<AdminPanel />} />

      </Routes>


      <ToastContainer />

    </>
  )
}

export default App
