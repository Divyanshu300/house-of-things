import React from 'react';
import {first , second} from "../../utils/footerData.js"
import { Link } from 'react-router-dom';
import paypal from "../../utils/images/paypal.webp"
import visa from "../../utils/images/visa.webp"
import american from "../../utils/images/american-express.webp"
import mastercard from "../../utils/images/mastercard.webp"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
    console.log(first)
    console.log(second)
  return (
    <div className='bg-gray-50 text-gray-700 text-sm'>
        <div className='flex items-center justify-center gap-12 border-b-[1px] h-[7rem]'>
            <div className='text-sm'>
                T&C
            </div>
            <div className='text-sm'>
                Privacy Policy
            </div>
        </div>

        <div className='flex px-10 items-center justify-center gap-52 my-10'>
            <div className='flex flex-col gap-12 mt-10'>
                <div>
                    {
                        first.map((link , index) => (
                            <div key={index} className='flex flex-col gap-4'>
                                <div className='font-medium'>
                                    {link.head}
                                </div>
                                <div className='flex flex-col gap-2'>    
                                    {
                                        link.links.map((i , ind) => {
                                            let nav;
                                            if(i === "PRESS & EVENTS") {
                                                nav = "press-events"
                                            }
                                            else {
                                                nav = i.split(" ").join("-").toLocaleLowerCase()
                                            }
                                            return (
                                                <Link to={nav} className='text-xs'>
                                                    {i}
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            
                        ))
                    }
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='text-sm font-medium'>
                        PAYMENT METHODS
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={paypal} alt=''/>
                        <img src={visa} alt=''/>
                        <img src={mastercard} alt=''/>
                        <img src={american} alt=''/>
                    </div>
                </div>
            </div>

            
            <div className='flex flex-col gap-6 mt-10'>
                <div>
                    {
                        second.map((link , index) => (
                            <div key={index} className='flex flex-col gap-4'>
                                <div className='font-medium'>
                                    {link.head}
                                </div>
                                <div className='flex flex-col gap-2'>    
                                    {
                                        link.links.map((i , ind) => {
                                            let nav;
                                            if(i === "SHIPPING & RETURNS") {
                                                nav = "shipping-returns"
                                            }
                                            else if(i === "TERMS & CONDITIONS") {
                                                nav = "terms-conditions"
                                            }
                                            else {
                                                nav = i.split(" ").join("-").toLocaleLowerCase()
                                            }
                                            return (
                                                <Link to={nav} className='text-xs'>
                                                    {i}
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            
                        ))
                    }
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='text-sm font-medium'>
                        FIND US ONLINE
                    </div>
                    <div className='flex items-center gap-4 text-xl'>
                        <Link to={"/"}>
                            <FaFacebook className='rounded-full'/>
                        </Link>
                        <Link to={"/"}>
                            <FaInstagramSquare className='rounded-full'/>
                        </Link>
                        <Link to={"/"}>
                            <FaSquareXTwitter className='rounded-full'/>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col items-center '>
                <div className='flex flex-col gap-4'>
                    <div>
                        BE THE FIRST TO KNOW
                    </div>
                    <div className='flex items-center gap-4'>
                        <input
                            type='email'
                            placeholder='Enter your email ID'
                            className='appearance-none bg-gray-50 placeholder:text-gray-400 p-2 pr-10 outline-none text-sm border-b-2 border-black'
                        />
                        <button className='border-b-2 border-black font-semibold px-6 py-1 mt-2'>
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-2 mt-28'>
                    <div>
                        CONCIERGE
                    </div>
                    <div>
                        +91 80030 11110 / concierge@thehouseofthings.com
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer