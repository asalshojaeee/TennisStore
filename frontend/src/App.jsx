
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Layout from "./helpers/Layout"
import { BrowserRouter } from "react-router-dom"

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


        </Routes>

      </BrowserRouter>



    </>
  )
}

export default App
