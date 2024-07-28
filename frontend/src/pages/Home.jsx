import React from 'react';

import Carousels from '../components/Carousels';

import new1 from "../utils/images/new1.webp";
import new2 from "../utils/images/new2.webp";
import new3 from "../utils/images/new3.webp";
import new4 from "../utils/images/new4.webp";
import new5 from "../utils/images/new5.webp";
import new6 from "../utils/images/new6.webp";

import bedRoom from "../utils/images/bedRoom.webp";
import theEarth from "../utils/images/theEarth.webp";
import readyShip from "../utils/images/readyShip.webp";
import alara from "../utils/images/alara.webp";

import { Link } from 'react-router-dom';

import eternal from "../utils/images/eternal.webp";
import wallFlower from "../utils/images/wallFlower.webp";
import grey from "../utils/images/grey.webp";

import duffy from "../utils/images/duffy.webp";
import jay from "../utils/images/jay.jpg";
import paul from "../utils/images/paul.webp";
import nishi from "../utils/images/nishi.jpg";

import idealhome from "../utils/images/idealhome.webp";
import elle from "../utils/images/elle.webp";
import goodhomes from "../utils/images/goodhomes.webp";
import femina from "../utils/images/femina.webp";
import vogue from "../utils/images/vogue.webp";
import adnew from "../utils/images/ad-new.webp";


import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Home = () => {

  const section3 = [
    {
        head : "THE BEDROOM EDIT",
        para : "Decorating your sanctuary with dreamy accents and cozy elements is a great way to fall in love with your space. Get the look with our newest curation.",
        link : "/",
        image : bedRoom,
        linkText : "SHOP THIS EDIT",
    },
    {
        head : "‘OF THE EARTH’",
        para : "From the earthy warmth of terracotta to the rustic charm of natural wood, explore our curated edit of must-have earthy picks for your home.",
        link : "/",
        image : theEarth,
        linkText : "SHOP THIS EDIT",
    },
    {
        head : "READY TO SHIP",
        para : "These waitlist-worthy styles are in stock and ready to ship - featuring everything from inspired seating and tables to plush bedroom and storage staples.",
        link : "/",
        image : readyShip,
        linkText : "SHOP THIS EDIT",
    },
    {
        head : "ALARA",
        para : "Handcrafted collections celebrating soft, earthy design and the beauty of imperfection in modern furniture collectibles for the home.",
        link : "/",
        image : alara,
        linkText : "SHOP THIS EDIT",
    },
];

  const section4 = [
    {
        head : "Eternal Ties - Art Print by Kamal Sharma",
        price : "₹13,200.00",
        image : eternal,
        para : "OPTIONS AVAILABLE",
        linkText : "THOT X RHEA",
        link : "/"
    },
    {
        head : "Wallflower",
        price : "₹4,000.00",
        image : wallFlower,
        para : "OPTIONS AVAILABLE",
        linkText : "Jaya Charan",
        link : "/"
    },
    {
        head : "Grey Heron",
        price : "₹3,370.00",
        image : grey,
        para : "OPTIONS AVAILABLE",
        linkText : "Mahaveer Swami",
        link : "/"
    },
  ];

  const section5 = [
    {
        head : "Duffy London",
        image : duffy,
        linkText : "Fun With Design",
        link : "/"
    },
    {
        head : "Nishita",
        image : nishi,
        linkText : "Nishita Thakurdas",
        link : "/"
    },
    {
        head : "Paul Matter",
        image : paul,
        linkText : "Nikhil Paul",
        link : "/"
    },
    {
        head : "Jay Strongwater",
        image : jay,
        linkText : "Hand Enameled Jewels for Home",
        link : "/"
    },
  ];

  return (
    <div className='mb-[100px]'>
      <Carousels/>

      {/* SECTION 2 */}

      <section className='flex flex-col mt-10 pb-20'>
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

      {/* SECTION 3 */}
      <section className='bg-gray-50 pt-10 pb-14'>\
        <div className=' w-[78%] mx-auto'>

          <div className='flex flex-col items-center justify-center text-xl'>
            <div>
              the
            </div>
            <div className='mb-1 text-2xl'>
              RECOMMENDATIONS
            </div>
            <div className='border-b-2 border-black w-[40px]'></div>
          </div>

          <div className='grid grid-cols-2 gap-8'>
            {
              section3.map((data , index) => (
                <div key={index} className='flex flex-col items-center gap-4 mt-14'>
                  <div className='text-xl font-normal'>
                    {data.head}
                  </div>
                  <img src= {data.image} alt={index}/>
                  <div className='text-center w-[66%] text-sm'>
                    {data.para}
                  </div>
                  <Link to={data.link} className='border-b-[1px] font-medium border-black p-1'>
                    {data.linkText}
                  </Link>
                </div>
              ))
            }
          </div>

          <div className='pt-20  flex items-center text-white'>
            <button className='bg-gray-900 py-2 px-8 ml-[17%]'>
              VIEW ALL EDITS
            </button>
            
            <button className='bg-gray-900 px-8 py-2 ml-[35.5%]'>
              VIEW ALL JOURNAL
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className='pt-10'>
        <div className=' w-[78%] mx-auto border-b-[1px]  pb-20 '>

          <div className='flex flex-col items-center justify-center text-xl'>
            <div>
              the
            </div>
            <div className='mb-1'>
              FINE PRINTS
            </div>
            <div className='border-b-2 border-black w-[40px]'></div>
          </div>

          <div className='flex gap-8 '>
            {
              section4.map((data , index) => (
                <div key={index} className='flex flex-col gap-4 mt-14'>
                  
                  <img src= {data.image} alt={index}/>
                  
                  <div className='flex  items-center justify-between'>
                    
                    <div className='flex flex-col'>
                      
                      <div className='w-[70%] font-medium text-sm'>
                        {data.head}
                      </div>
                      
                      <div className='flex items-center mb-1 text-gray-400'>
                      
                        By
                      
                        <Link to={data.link} className='text-gray-400 text-sm font-semibold p-1'>
                          {data.linkText}
                        </Link>
                      
                      </div>

                      <div className=' text-xs font-medium bg-gray-200 w-fit py-1 px-2'>
                        {data.para}
                      </div>
                    
                    </div>
                    
                    <div className='flex -mt-20 font-medium text-sm'>
                      {data.price}
                    </div>
                  
                  </div>
                  
                </div>
              ))
            }
          </div>
          
          <div className='flex items-center justify-center w-full'>
            <button className='text-sm border-b-[1px] border-black p-1 mt-10'>
              VIEW ALL
            </button>
          </div>


        </div>

      </section>

      {/* SECTION 5 */}

      <section className='pt-10'>

        <div className=' w-[78%] mx-auto pb-20 '>    

        <div className='flex flex-col items-center justify-center text-xl'>
          <div>
            the
          </div>
          <div className='mb-1'>
            MAKERS
          </div>
          <div className='border-b-2 border-black w-[40px]'></div>
        </div>

        <div className='flex gap-8 '>
            {
              section5.map((data , index) => (
                <div key={index} className='flex flex-col gap-1 mt-14 items-center'>
                  
                  <Link className='flex flex-col items-center gap-2 text-sm font-medium'>
                    <img src= {data.image} alt={index}/>
                    
                    {data.head}
                  </Link>
                  
                  <div className='flex items-center mb-1 text-gray-400 text-sm font-medium'>
                    {data.linkText}
                  </div>
                  
                </div>
              ))
            }
          </div>

          <div className='flex items-center justify-center w-full'>
            <button className='text-sm border-b-[1px] border-black p-1 mt-20 font-medium '>
              VIEW OUR MAKERS
            </button>
          </div>


        </div>
      </section>

      {/* SECTION 6 */}
      <section className='bg-gray-50 pt-10 pb-14'>

        <div className=' w-[78%] items-center mx-auto flex flex-col gap-8'>

          <div className='text-4xl'>
            A little bit of us
          </div>

          <div className='w-[35%] text-center'>
            The house of things is a curated online destination to discover and shop for luxury interiors.
          </div>

          <div className='flex gap-6 text-xl items-center'>
            <Link to={"/"} className='rounded-full'>
              <FaFacebook/>
            </Link>
            
            <Link to={"/"} className='rounded-full'>
              <FaInstagramSquare/>
            </Link>
            
            <Link to={"/"} className='rounded-full'>
              <FaSquareXTwitter/>
            </Link>
          </div>

        </div>

      </section>

      {/* SECTION 7 */}

      <section className='pt-10'>
        
        <div className=' w-[78%] mx-auto'>
          
          <div className='flex flex-col items-center justify-center text-xl'>
            <div className='mb-1'>
              Featured In
            </div>
            <div className='border-b-2 border-black w-[40px]'></div>
          </div>
          
          <div className='flex items-center gap-16 justify-center mt-20 pb-10'>
            <img src={idealhome} alt='...' className='w-[140px]'/>
            <img src={goodhomes} alt='...' className='w-[140px]'/>
            <img src={adnew} alt='...' className='w-[140px]'/>
            <img src={vogue} alt='...' className='w-[140px]'/>
            <img src={elle} alt='...' className='w-[140px]'/>
            <img src={femina} alt='...' className='w-[140px]'/>
          </div>

          <div className='flex flex-col gap-1 items-center justify-center text-xl pt-10'>
            
          <div className='border-b-[1px] border-black w-[40px]'></div>
            
            <div className='mb-1 mt-1'>
              Nothing haunts us
            </div>

            <div className='text-2xl font-light'>
              LIKE THE THINGS
            </div>

            <div className='mb-2'>
              we didn't buy
            </div>

            <div className='border-b-[1px] border-black w-[40px]'></div>

          </div>

        </div>

      </section>
        
    </div>
  )
}

export default Home