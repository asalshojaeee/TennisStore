
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Layout from "./helpers/Layout"
import { BrowserRouter } from "react-router-dom"

import Login from './pages/Login'
import SignUp from "./pages/SignUp"



function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route>


            <Route element={<Layout/>}>
            
             <Route path="/" element={<Home />} />

            </Route>
          </Route>


          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>


        </Routes>

      </BrowserRouter>



    </>
  )
}

export default App
