

import axios from 'axios'
import { FaStar } from "react-icons/fa6";

import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import RecommandedProduct from './RecommandedProduct';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function CartProductDetails() {
  const [recommandedProduct, setRecommandedProduct] = useState([])

  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState("")

  const user = useSelector(state => state?.user?.user)

  const handleQuantityPlus = (e) => {

    setQuantity(preve => preve += 1)

  }
  const handleQuantityMinus = () => {
    setQuantity(prev => {
      if (prev <= 0) {
        return 0;
      }
      return prev - 1;
    });
  };

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


  const handleAddToCart = async () => {
    const result = axios.post("http://localhost:3000/api/addtocart", {
      quantity: quantity,
      productId: params?.id,
      productName:data?.productName,
      userId: user._id,
      sellingPrice: data?.sellingPrice,
      productImage:data?.productImage[0]
    })
    if (result.success) {
      toast.success(result.message)

    }

  }


  return (

    <>



      <div className="w-full">
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

            <div className="mt-6">
              <p className="mb-3 text-gray-500">Size</p>

              <div className="flex gap-3 ">
                <button className="w-10 h-10 border border-gray-300 rounded hover:border-blue-400 cursor-pointer">
                  39
                </button>

                <button className="w-10 h-10 border border-gray-300 rounded hover:border-blue-400 cursor-pointer">
                  40
                </button>

                <button className="w-10 h-10 border border-gray-300 rounded hover:border-blue-400 cursor-pointer">
                  41
                </button>

                <button className="w-10 h-10 border border-gray-300 rounded hover:border-blue-400 cursor-pointer">
                  42
                </button>
              </div>
            </div>
            <div className='flex flex-row items-center justify-start mt-20 gap-3 '>
              <button className='cursor-pointer'><CiCirclePlus className='text-3xl text-gray-400' onClick={handleQuantityPlus} /></button>
              <p className='text-gray-400'>{quantity}</p>

              <button className='cursor-pointer'><CiCircleMinus className='text-3xl text-gray-400' onClick={handleQuantityMinus} /></button>

              <button
                onClick={handleAddToCart}


                className="cursor-pointer hover:translate-y-0.5 transition-all w-full md:w-60 bg-blue-500 text-white p-3 rounded-lg">
                Add to cart
              </button>
            </div>


          </div>

        </div>
        <RecommandedProduct

          category={data.category}
          brandName={data.brandName}
          id={params.id}
        />
      </div>

    </>
  )
}

export default CartProductDetails