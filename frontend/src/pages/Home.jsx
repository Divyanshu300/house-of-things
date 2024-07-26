import React from 'react'
import Carousels from '../components/Carousels';
import new1 from "../utils/images/new1.webp"
import new2 from "../utils/images/new2.webp"
import new3 from "../utils/images/new3.webp"
import new4 from "../utils/images/new4.webp"
import new5 from "../utils/images/new5.webp"
import new6 from "../utils/images/new6.webp"

const Home = () => {
  return (
    <div className='mb-[100px]'>
        <Carousels/>

        {/* SECTION 1 */}

        <section className='flex flex-col mt-10'>
            <div className='flex flex-col items-center justify-center mb-4 gap-1'>
              <p className='mt-4 text-lg'>
                  the
              </p>
              <p className='text-2xl font-medium'>
                  NEW ARRIVALS
              </p>
              <div className='w-[40px] border-b-2 border-black'></div>
            </div>
            <div className='flex gap-8 mx-auto mt-10'>
              
              <div className='flex flex-col gap-8'>
                <div className='flex gap-8 relative'>
                  <img src={new1} alt='' className='w-[270px] -z-[100] hover:opacity-[30%] group'/>
                  <img src={new2} alt='' className='w-[270px]'/>
                </div>
                  <div className='w-full h-full hidden z-100 group-hover:flex items-center justify-center '>
                    sdvsd
                  </div>
                <img src={new3} alt='' className='w-[570px]'/>
              </div>              
              
              <div className='flex flex-col gap-8'>
                <img src={new4} alt='' className='w-[570px]'/>
                <div className='flex gap-8'>
                  <img src={new5} alt='' className='w-[270px]'/>
                  <img src={new6} alt='' className='w-[270px]'/>
                </div>
              </div>                        
            
            </div>
        </section>
    </div>
  )
}

export default Home