import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 pt-10  ">
      <form className="bg-white px-28 py-20 rounded  w-2/5" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-semibold mb-6 text-center">SIGN IN</h2>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Email</label>
          <input 
            {...register('email', { required: true })} 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.email && <span className="text-red-600">Email is required</span>}
        </div>

        <div className="mb-8">
          <label className="block font-medium text-gray-700">Password</label>
          <input 
            {...register('password', { required: true })} 
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.password && <span className="text-red-600">Password is required</span>}
        </div>

        <button 
          type="submit" 
          className="w-full bg-gray-700 text-white p-2 mb-4 rounded hover:scale-95 transition-all duration-200"
        >
          LOGIN
        </button>

      </form>

      <div className='w-2/5 '>
      <div className='bg-white border-l-2 px-28 py-20 text-gray-500 flex flex-col gap-4'>
        <div className='font-semibold text-gray-600 text-sm'> 
          NEW TO THE HOUSE OF THINGS?
        </div>

        <div className='text-sm text-gray-500'>
          Make Shopping for beautiful interiors online truly effortless by creating an account.
        </div>

        <div>
          
          <div>With a simple registration, you can:</div>
          
          <ul className='list-disc pl-8 text-sm'>
            <li>Save items in your favourites</li>
            <li>Be the first to hear about exciting THOT news</li>
            <li>Manage your address details</li>
            <li>Track existing orders and view your order history</li>
          </ul>
        
        </div>

        <button 
          type="submit" 
          className="w-full border-gray-700 border mt-7 text-gray-700 p-2 mb-4 rounded hover:scale-95 transition-all duration-200"
        >
          SIGN UP
        </button>
        </div>
      </div>
    </div>
  )
}

export default Login