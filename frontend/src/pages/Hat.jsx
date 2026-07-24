
import axios from 'axios'

import React, { useEffect, useState } from 'react'

import displayCurrency from '../helpers/displayCurrency'



const Hat = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [currentImage, setCurrentImage] = useState({})

  const fetchProduct = async () => {
    setLoading(true)
    const responseData = await axios.get('http://localhost:3000/api/getHatProducts')
    setProducts(responseData.data.data)
    setLoading(false)

  }



  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <section className='m-2 overflow-hidden'>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {
          loading ? (
            [...Array(3)].map((_, index) => (
              <div
                key={index}
                className="cart-body h-full w-full flex-col  shadow-sm p-5 rounded-xl animate-pulse"
              >
                <div className="h-56 w-full rounded bg-gray-300"></div>

                <div className="flex justify-center gap-2 mt-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-gray-300"
                    ></div>
                  ))}
                </div>

                <div className="h-5 w-24 bg-gray-300 rounded mt-4"></div>

                <div className="h-5 w-16 bg-gray-300 rounded mt-3"></div>

                <div className="mt-4 gap-3 flex flex-wrap">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-md bg-gray-300"
                    ></div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="h-10 w-full rounded-md bg-gray-300"></div>
                </div>
              </div>
            ))


          ) :

            (
              products.map((pro, index) => {
                return (
                  <div key={index} className='cart-body h-full w-full flex-col  shadow-sm p-5 rounded-xl'>
                    <img

                      src={pro.productImage[currentImage[pro._id] || 0]}

                      alt="" className='bg-transparent mix-blend-multiply h-56 rounded-xl object-cover w-full' />
                    <div className="flex justify-center gap-2 mt-3">
                      {pro.productImage.map((img, i) => (
                        <button
                          key={i}
                          onClick={() =>
                            setCurrentImage(prev => ({
                              ...prev,
                              [pro._id]: i
                            }))
                          }
                          className={`cursor-pointer w-2 h-2 rounded-full ${(currentImage[pro._id] || 0) === i
                            ? "bg-blue-600"
                            : "bg-gray-300"
                            }`}
                        />
                      ))}
                    </div>
                 <p className='text-blue-400'>Brand: <span className='font-light text-blue-300'>{pro?.brandName}</span></p>
                    <p className='text-blue-300 font-medium'>{displayCurrency(pro?.price)}</p>


                    <div className='text-center mt-6'>
                      <button className='bg-blue-400 w-full hover:translate-y-1 transition-all text-white p-2 rounded-md'>Add to cart</button>

                    </div>
                  </div>
                )

              })
            )
        }

      </div>




    </section>
  )
}

export default Hat