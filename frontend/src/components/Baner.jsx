
import image1d from '../assets/images/image1d.jpg'
import baner2 from '../assets/images/baner2.jpg'
import image10d from '../assets/images/image10d.jpg'
import image4d from '../assets/images/image4d.jpg'

import imag5d from '../assets/images/imag5d.jpg'

// import image10d from '../assets/images/image10d.jpg'
import image2m from '../assets/images/image2m.jpg'
import image3m from '../assets/images/image3m.jpg'



import { useState, useEffect } from 'react'

const Baner = () => {


    const imgDesktop = [baner2, imag5d, image10d];
    const imgMobile = [image10d, imag5d, baner2];



    const [currentImage, setCurrentImage] = useState(0);



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % imgDesktop.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [imgDesktop.length]);

    return (


        <div className='containar mx-auto  rounded'>
            <div className='h-56 md:h-90 w-full bg-slate-200'>


                <div className='hidden md:flex  h-full w-full overflow-hidden'>


                    {
                        imgDesktop.map((URL, index) => {
                            return (

                                <div style={{ transform: `translateX(-${currentImage * 100}%)` }} className='w-full h-full min-h-full min-w-full transition-all'>
                                    <img src={URL} alt="" className='h-full w-full '/>

                                </div>
                            )

                        })
                    }


                </div>


                <div className=' flex h-full w-full overflow-hidden md:hidden'>


                    {
                        imgMobile.map((URL, index) => {
                            return (

                                <div style={{ transform: `translateX(-${currentImage * 100}%)` }} className='w-full h-70 min-h-full min-w-full transition-all'>
                                    <img src={URL} alt="" className='w-full h-full' />

                                </div>
                            )

                        })
                    }


                </div>


            </div>
        </div>




    )

}


export default Baner