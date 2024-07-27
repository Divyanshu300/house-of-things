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
                <div className='flex gap-8'>
                  
                  <div className='relative group'>
                    
                    <img src={new1} alt='' className='w-[270px] -z-10'/>
                    
                    <div className='absolute text-sm flex-col gap-2 inset-0 hidden z-0 group-hover:flex items-center justify-center bg-white bg-opacity-[60%] text-black'>
                      <button className='hover:underline font-semibold'>
                        TINAJA VASES
                      </button>
                      <button>
                        By <span className='hover:opacity-[70%] transition-all duration-200 '>THOT X D'Lab</span>
                      </button>
                      <div className='font-semibold'> 
                        ₹6,950.00
                      </div>

                    </div>
                  
                  </div>
                  
                  <div className='relative group'>

                    <img src={new2} alt='' className='w-[270px] -z-10'/>

                    <div className='absolute text-sm flex-col gap-2 inset-0 hidden z-0 group-hover:flex items-center justify-center bg-white bg-opacity-[60%] text-black'>
                      <button className='hover:underline font-semibold'>
                        Kori Wooden Basket
                      </button>
                      <button>
                        By <span className='hover:opacity-[70%] transition-all duration-200 '>Studio Indigene</span>
                      </button>
                      <div className='font-semibold'> 
                        ₹4,800.00
                      </div> 
                    </div>
                  </div>
                
                </div>

                <div className='relative group'>

                  <img src={new3} alt='' className='w-[570px]'/>

                  <div className='absolute text-sm flex-col gap-2 inset-0 hidden z-0 group-hover:flex items-center justify-center bg-white bg-opacity-[60%] text-black'>
                    
                    <button className='hover:underline font-semibold'>
                      Terra Book Shelf
                    </button>
                  
                    <button>
                      By <span className='hover:opacity-[70%] transition-all duration-200 '>By Objectry</span>
                    </button>
                  
                    <div className='font-semibold'> 
                      ₹47,600.00
                      </div> 
                  
                  </div>

                </div>
              
              </div>              
              
              <div className='flex flex-col gap-8'>

                <div className='relative group'>
                
                  <img src={new4} alt='' className='w-[570px] -z-10'/>
                  
                  <div className='absolute text-sm flex-col gap-2 inset-0 hidden z-0 group-hover:flex items-center justify-center bg-white bg-opacity-[60%] text-black'>
                    
                    <button className='hover:underline font-semibold'>
                      Ant Light
                    </button>
                  
                    <button>
                      By <span className='hover:opacity-[70%] transition-all duration-200 '>Shailesh Rajput Studio</span>
                    </button>
                  
                    <div className='font-semibold'> 
                      ₹15,340.00
                    </div>
                  
                  </div>
                
                </div>

                <div className='flex gap-8'>
                <div className='relative group'>
                  <img src={new5} alt='' className='w-[270px]'/>
                  
                  <div className='absolute text-sm flex-col gap-2 inset-0 hidden z-0 group-hover:flex items-center justify-center bg-white bg-opacity-[60%] text-black'>
                    
                    <button className='hover:underline font-semibold'>
                      Serving Hope I Sculpture
                    </button>
                  
                    <button>
                      By <span className='hover:opacity-[70%] transition-all duration-200 '>Claymen Studio</span>
                    </button>
                  
                    <div className='font-semibold'> 
                    ₹65,000.00
                    </div>
                  
                  </div>
                  </div>
                  <div className='relative group'>
                  <img src={new6} alt='' className='w-[270px]'/>
                  
                  <div className='absolute text-sm flex-col gap-2 inset-0 hidden z-0 group-hover:flex items-center justify-center bg-white bg-opacity-[60%] text-black'>
                    
                    <button className='hover:underline font-semibold'>
                      Maha 04
                    </button>
                  
                    <button>
                      By <span className='hover:opacity-[70%] transition-all duration-200 '>Art Attaichi</span>
                    </button>
                  
                    <div className='font-semibold'> 
                      ₹198,000.00
                    </div>
                  
                  </div>
                </div>
                </div>
              </div>                        
            
            </div>
        </section>
    </div>
  )
}

export default Home