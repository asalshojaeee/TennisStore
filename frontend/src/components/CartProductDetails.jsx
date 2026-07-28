

import axios from 'axios'

import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

function CartProductDetails() {
  const [recommandedProduct, setRecommandedProduct] = useState([])

  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState("")


  const handleQuantityPlus = (e) => {

    setQuantity(preve => preve += 1)

  }
  const handleQuantityMinus = (e) => {
    setQuantity(preve => preve -= 1)


  }


  const handleEnterImage = (img) => {

    setActiveImage(img)

  }
  const params = useParams()

  const [data, setData] = useState({
    productName: "",
    price: Number,
    brandName: "",
    sellingPrice: Number,
    category: "",
    description: "",
    productImage: []
  })

  const fetchData = async () => {
    const response = await axios.post('http://localhost:3000/api/getproductdetail', {
      productId: params?.id
    })
    setData(response.data.data)
    setActiveImage(response?.data.data.productImage[0])


  }
  useEffect(() => {
    fetchData()
  }, [params])



  const recommandedProducts = async () => {

    const res = await axios.get(
      `http://localhost:3000/api/getrecommanded?category=${data.category}&brand=${data.brandName}&id=${params.id}`
    )
    setRecommandedProduct(res.data.data)
  }
  useEffect(() => {
    if (!data.category) return;

    recommandedProducts();
  }, [data.category]);
  return (

    <>



      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          <div>
            <img
              src={activeImage}
              alt=""
              className="w-full max-w-md mx-auto h-auto object-contain"
            />

            <div className="flex flex-wrap gap-3 justify-center mt-5">
              {data?.productImage.map((img, index) => (
                <div
                  key={index}
                  className="w-20 h-20  rounded p-1"
                >
                  <img
                    src={img}
                    className="w-full h-full object-contain cursor-pointer"
                    alt=""
                    onClick={() => handleEnterImage(img)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="shadow-xl rounded-lg p-6 w-full ">
            <p className="text-2xl text-blue-500 font-semibold">
              {data.productName}
            </p>

            <p className="text-gray-500 mt-3">
              Brand: {data.brandName}
            </p>

            <p className="text-gray-500">
              Price: {data.price}
            </p>

            <p className="text-xl font-bold mt-3 text-gray-500">
              {data.sellingPrice}
            </p>

            <div className="flex items-center justify-start gap-4 mt-6 text-gray-500">
              <span>Size</span>

              <ul className="flex gap-3">
                <li className="w-10 h-10 rounded-full border border-blue-400 flex justify-center items-center">
                  38
                </li>
                <li className="w-10 h-10 rounded-full border border-blue-400 flex justify-center items-center">
                  45
                </li>
                <li className="w-10 h-10 rounded-full border border-blue-400 flex justify-center items-center">
                  47
                </li>
              </ul>
            </div>
            <div className='flex flex-row items-center justify-start mt-20 gap-3 '>
              <button className='cursor-pointer'><CiCirclePlus className='text-3xl text-gray-400' onClick={handleQuantityPlus} /></button>
              <p className='text-gray-400'>{quantity}</p>

              <button className='cursor-pointer'><CiCircleMinus className='text-3xl text-gray-400' onClick={handleQuantityMinus} /></button>

              <button className="cursor-pointer hover:translate-y-0.5 transition-all w-full md:w-60 bg-blue-500 text-white p-3 rounded-lg">
                Add to cart
              </button>
            </div>


          </div>

        </div>
        <div className='container'>
          <h2 className='text-2xl font-bold text-blue-300 mt-10 p-5'>Recommanded Products</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
              recommandedProduct.map((res, index) => {
                return (

                  <div className='cart'>
                    <div className='cart-header'></div>
                    <div className='cart-body'>

                      <img src={res.productImage[0]} alt="" />
                    </div>


                  </div>




                )
              })
            }

          </div>

        </div>
      </div>

    </>
  )
}

export default CartProductDetails