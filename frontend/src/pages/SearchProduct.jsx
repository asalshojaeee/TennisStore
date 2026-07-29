
import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function SearchProduct() {
  const [data, setData] = useState([])
  const query = useLocation()

  const fetchData = async () => {

    const response = await axios.get(`http://localhost:3000/api/search${query.search}`)
    setData(response.data.data)

  }
  useEffect(() => {
    fetchData()
  }, [query.search])
  return (
    <div className='container'>


      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        <p>{data.length}</p>

      </div>





    </div>
  )
}

export default SearchProduct