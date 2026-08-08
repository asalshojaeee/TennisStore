import React, { useEffect, useState } from 'react'
import axios from 'axios'
import displayCurrency from '../helpers/displayCurrency'
function Cart() {

    const [data, setData] = useState([])


    const fetchData = async () => {

        const res = await axios.get("http://localhost:3000/api/cart")
        console.log(res)
        setData(res.data?.data)



    }
    useEffect(() => {
        fetchData()
    }, [])


    const tottalPrice = data.reduce((total, item) => {
        return total + Number(item.sellingPrice) * Number(item.quantity)

    }, 0)
    return (


        <div className='flex flex-row  md:flex md:gap-5 gap-3'>
            <div className="flex flex-col lg:flex-row gap-8">

                <div className="flex-1 overflow-x-auto bg-white rounded-lg shadow-md p-5">

                    <table className="w-full table-auto border-collapse">

                        <thead>
                            <tr className="border-b bg-gray-100 text-gray-600">
                                <th className="p-4 text-left">Product</th>
                                <th className="p-4 text-center">Price</th>
                                <th className="p-4 text-center">Quantity</th>
                                <th className="p-4 text-center">Partial Sum</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((pro) => (
                                <tr
                                    key={pro._id}
                                    className="border-b hover:bg-gray-50 transition"
                                >
                                    <td className="p-4">
                                        <div className="flex items-center gap-4 min-w-62.5">
                                            <img
                                                src={pro.productImage}
                                                alt={pro.productName}
                                                className="w-20 h-20 object-cover rounded-md border"
                                            />

                                            <span className="font-medium">
                                                {pro.productName}
                                            </span>
                                        </div>
                                    </td>

                                    <td className="p-4 text-center font-medium text-blue-600">
                                        ${pro.sellingPrice}
                                    </td>

                                    <td className="p-4 text-center">
                                        {pro.quantity}
                                    </td>

                                    <td className="p-4 text-center font-semibold">
                                        ${pro.sellingPrice * pro.quantity}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>

                <div className="w-full lg:w-80 border border-blue-300 rounded-lg shadow-md p-6 h-fit">

                    <h2 className="text-2xl font-bold text-blue-600 mb-6">
                        Shopping Cart Total
                    </h2>

                    <div className="flex justify-between mb-5">
                        <span className="text-gray-500">Total</span>
                        <span className="font-bold">{displayCurrency(tottalPrice)}</span>
                    </div>

                    <button className="w-full h-11 bg-red-600 hover:bg-red-700 transition rounded-md text-white font-semibold cursor-pointer">
                        Payment
                    </button>

                </div>

            </div>

        </div>




    )
}

export default Cart