
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"

import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>


          <Route path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>



    </>
  )
}

export default App
