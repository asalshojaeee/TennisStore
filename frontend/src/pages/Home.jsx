
import Header from "../components/Header"
import Baner from "../components/Baner"

import baner2 from '../assets/images/baner2.jpg'
import image1m from '../assets/images/image1m.jpg'

import model1 from '../assets/images/model1.jpg'
import image2m from '../assets/images/image2m.jpg'
import image3m from '../assets/images/image3m.jpg'

import model2 from '../assets/images/model2.jpg'
import model6 from '../assets/images/model6.jpg'
import Footer from "../components/Footer"
import TennisFooter from "../components/TennisFooter"

const Home = () => {

    return (
        <>

            <Baner />


            <div className="w-full">
                <div className="flex overflow-hidden">
                    <div className="w-full md:flex md:flex-row">
                        <img src={model6} alt="" className="object-cover w-full" />
                        <img src={model2} alt="" className="object-cover w-full" />
                    </div>


                </div>

            </div>




        </>
    )

}


export default Home