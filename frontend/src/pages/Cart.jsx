import React from 'react'

function Cart() {
    return (


        <div className='flex flex-row  md:flex md:gap-5 gap-3'>
            <div className='p-5 flex flex-col gap-5'>

                <table className=''>
                    <tr className='text-gray-400'>
                        <th className='p-5'>Product</th>
                        <th className='p-5'>Price</th>
                        <th className='p-5'>Quantity</th>
                        <th className='p-5'>Partial sum
                        </th>
                    </tr>

                </table>
            </div>
            <div className='border  border-blue-300 shadow-md p-5 flex flex-col gap-5'>
                <h2 className='font-bold text-xl text-blue-600 '>Shopping Cart Total
                </h2>
                <p className='text-slate-400'>Total</p>
                <button className='cursor-pointer bg-red-700 text-white font-medium w-full h-10 rounded-sm'>Payment</button>
            </div>
        </div>




    )
}

export default Cart