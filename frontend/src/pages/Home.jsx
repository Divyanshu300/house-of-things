import React from 'react'
import Carousels from '../components/Carousels'

const Home = () => {
  return (
    <div className='mb-[100px]'>
        <Carousels/>

        {/* SECTION 1 */}

        <section className='flex flex-col mt-10'>
            <div className='flex flex-col items-center justify-center gap-2'>
            <p>
                the
            </p>
            <p>
                NEW ARRIVALS
            </p>
            <div className='w-[40px] border-b-2 border-black'></div>
            </div>
            <div>

            </div>
        </section>
    </div>
  )
}

export default Home