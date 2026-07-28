


import React from 'react'

function RecommandedProduct() {
  return (
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
  )
}

export default RecommandedProduct