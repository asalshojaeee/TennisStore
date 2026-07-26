

import axios from 'axios'

import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function CartProductDetails() {
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

  }
  useEffect(() => {
    fetchData()
  }, [params])
  return (

    <>



      <div className='flex gap-20'>
            <img src={data.productImage[0]} alt="" className='w-50 h-60' />

    

  
        <div className='shadow-xl w-full p-10 '>
          <p className='text-blue-500 text-lg'>{data.productName}</p>
          <p className='text-slate-300 text-lg'>Brand: {data.brandName}</p>
          <p className='text-slate-300 text-lg'>Price: {data.price}</p>
          <p className='text-slate-300 text-lg'>{data.sellingPrice}</p>
          <div className='flex flex-row gap-3'>
            <p className='text-slate-300 text-lg'>Size</p>
            <ul className='flex gap-5 text-center'>
              <li className=' text-green-600 text-lg rounded-full w-8 h-8 border border-blue-400'>38</li>
              <li className=' text-green-600  text-lg rounded-full w-8 h-8 border border-blue-400'>45</li>
              <li className=' text-green-600 text-lg rounded-full w-8 h-8 border border-blue-400'>47</li>
            </ul>
          </div>

          <button className='bg-blue-400 p-2 text-white mt-5 w-50 rounded-md'>Add to cart</button>




        </div>

      </div>
            <div className='flex flex-row'>
              {
            data?.productImage.map((img, index) => {

              return (
                <div className="h-20 w-20  rounded p-1" key={index}>
                  <img

                    src={img} className="h-full cursor-pointer mix-blend-multiply w-full object-scale-down" alt="" />
                </div>
              )

            })
          }
  
          </div>
      
    </>
  )
}

export default CartProductDetails