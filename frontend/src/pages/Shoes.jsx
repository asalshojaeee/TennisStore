
import axios from 'axios'
import React, { useState } from 'react'

const Shoes = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);


    const getProduct = async () => {
        setLoading(true)
        const responseData = await axios.get(`http://localhost:3000/api/getsneakersproduct`)
        setProducts(responseData.data)
        setLoading(false)

    }
    return (



        <section>
            <div className='flex md:flex-row'>
                {
                    products.map((pro, index) => {
                        return (
                            <div className='cart'>
                                <div className='cart-body'>
                                    <img src={pro?.productImage} alt="" />

                                </div>

                            </div>
                        )
                    })
                }


            </div>

        </section>
    )
}

export default Shoes