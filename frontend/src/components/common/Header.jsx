// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../utils/images/logo.webp"
import { CiMenuBurger } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";


const Header = () => {

  const [isMenu , setIsMenu] = useState(false);
  const [searchField , setSearchField] = useState(false);

  return (
    <header className=' sticky top-0 z-10'>
      <div className="bg-white shadow h-[21vh]">
        <div className='border-b-2 '>
          <div className="container w-9/12 mx-auto py-5">
            <div className="flex items-center justify-between">
              <div className='flex items-center gap-6 '>
                <div className='transition-all duration-500 cursor-pointer' onClick={()=>setIsMenu((prev) => !prev)}>
                  {
                    isMenu ? <RxCross1 className='text-2xl text-gray-600'/> : <CiMenuBurger className='text-2xl text-gray-600'/>
                  }
                </div>
                <div className='relative transition-all duration-200' onMouseOver={() => setSearchField(true)} onMouseOut={() => {setSearchField(false)}}>
                  {
                    !searchField && <CiSearch className='text-2xl text-gray-600'/>
                  }
                  {
                    searchField &&
                    <div className='w-[24px]'>
                        <div className='absolute -top-[1.1rem]'>
                        <CiSearch className='text-2xl absolute left-2 top-[6px] text-gray-600'/>
                        <input 
                          className='outline-none border-2 rounded-3xl py-2 pl-8 pr-4 text-xs'
                          placeholder='What are you lookin for?'
                        />
                      </div>
                    </div>
                  }
                </div>
              </div>
              <div className="w-full flex justify-center font-bold text-gray-800">
                <Link to="/" className='mx-auto'>
                  <img src={logo} alt='...' className='w-[38%] mx-auto'/>
                </Link>
              </div>
              <div className='flex items-center gap-6 text-gray-600'>
                <FaRegUser className='text-xl text-gray-600'/>
                <CiHeart className='text-3xl text-gray-600'/>
                <HiOutlineShoppingBag className='text-2xl'/>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center w-9/12 mx-auto px-2 mt-3">
          <nav className="w-full flex items-center justify-between">
            <Link to="/furniture" className="text-gray-600 font-bold">COLLABORATIONS</Link>
            <Link to="/furniture" className="text-gray-600 font-bold">FURNITURE</Link>
            <Link to="/lighting" className="text-gray-600 font-bold">ACCESSORIES</Link>
            <Link to="/decor" className="text-gray-600 font-bold">KITCHEN & DINING</Link>
            <Link to="/art" className="text-gray-600 font-bold">LIGHTING</Link>
            <Link to="/lighting" className="text-gray-600 font-bold">ART</Link>
            <Link to="/decor" className="text-red-700 font-bold">GIFTS</Link>
            <Link to="/art" className="text-gray-600 font-bold">MAKERS</Link>
          </nav>
        </div>
      </div>

      {
        isMenu && 
        
        <div className='absolute group h-[79vh] bg-black w-[25%] text-white z-50'>
          lkdjvncldkvn;wqekn
        </div> 
      }

    </header>
  );
};

export default Header;
