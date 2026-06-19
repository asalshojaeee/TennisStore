

import {Link} from 'react-router-dom'


import logo1 from '../assets/logo/logo1.png'

const Header = () => {


    return (
        <>

            <section>
                <div className="flex justify-between bg-slate-200 h-28 items-center">

                   <Link to={'/'}>
                   <img src={logo1} alt="" className='w-13 h-13'/>
                   
                   </Link>


                    <input type="text" placeholder="Search" className='rounded-xl h-7 w-50'/>


                </div>
          
            </section>
        </>
    )

}

export default Header