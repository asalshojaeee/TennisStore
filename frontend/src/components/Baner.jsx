
import image1d from '../assets/images/image1d.jpg'
import image2d from '../assets/images/image2d.jpg'
import image3d from '../assets/images/image3d.jpg'




import image1m from '../assets/images/image1m.jpg'
import image2m from '../assets/images/image2m.jpg'
import image3m from '../assets/images/image3m.jpg'



import { useState, useEffect } from 'react'

const Baner = () => {


    const imgDesktop = [image2d, image1d, image3d];
    const imgMobile = [image1m, image2m, image3m];



    const [currentImage, setCurrentImage] = useState(0);



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % imgDesktop.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [imgDesktop.length]);

    return (


        <div className='containar mx-auto px-4 rounded'>
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