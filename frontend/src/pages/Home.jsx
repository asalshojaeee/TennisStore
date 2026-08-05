
import Header from "../components/Header"
import Baner from "../components/Baner"
import { IoBagHandleOutline } from "react-icons/io5";

import baner2 from '../assets/images/baner2.jpg'
import image1m from '../assets/images/image1m.jpg'

import model1 from '../assets/images/model1.jpg'
import image2m from '../assets/images/image2m.jpg'
import image3m from '../assets/images/image3m.jpg'

import model2 from '../assets/images/model2.jpg'
import model90 from '../assets/images/model90.jpg'
import Footer from "../components/Footer"
import axios from 'axios'
import { useEffect, useState } from "react"
const Home = () => {
    const [discountProducts, setDiscountProducts] = useState([]);

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3000/api/discounts')
        setDiscountProducts(response.data.data)

    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>

            <Baner />

            <h2 className="text-green-600 text-3xl font-bold  uppercase p-5">Biggest Discounts
            </h2>
            <div className=" flex gap-5 rounded-sm text-yellow-300 font-bold text-xl bg-green-800 opacity-80 w-100 p-5">
                <div className="bg-white opacity-70 p-3 rounded-sm">2</div>
                <div className="bg-white opacity-70 p-3 rounded-sm">5</div>
                <div className="bg-white opacity-70 p-3 rounded-sm">%</div>
                <div className="bg-white opacity-70 p-3 rounded-sm">O</div>
                <div className="bg-white opacity-70 p-3 rounded-sm">F</div>
                <div className="bg-white opacity-70 p-3 rounded-sm">F</div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 p-5">
                {discountProducts.map((product) => (
                    <div key={product._id} className="card border border-gray-300 rounded-md p-5 text-blue-400">
                        <div className="">
                            <img src={product.productImage[0]} className="w-50 h-60 m-auto" />

                        </div>
                        <div className="">
                            <h2 className="text-red-400 font-serif">{product.brandName}</h2>

                            <p className="line-through text-gray-300">
                                ${product.price}
                            </p>

                            <p>
                                ${product.sellingPrice}
                            </p>
                        </div>
                        <div className="mt-3 relative text-center">
                            <button className="w-full bg-blue-400 p-3 rounded-sm text-white font-bold">
                                Add To Cart
                            </button>

                        </div>

                    </div>
                ))}

            </div>


            <div className="w-full overflow-hidden">
                <div className="flex overflow-hidden">
                    <div className="w-full md:flex md:flex-row">
                        <img src={model90} alt="" className="object-cover md:w-[50%] w-full" />
                        <img src={model2} alt="" className="object-scale-cover md:w-[50%] w-full" />
                    </div>


                </div>

            </div>




        </>
    )

}


export default Home