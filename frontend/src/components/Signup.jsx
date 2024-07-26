import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import countryList from "../utils/countryList.json"
import PasswordStrengthBar from 'react-password-strength-bar';


const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const [inputValue, setInputValue] = useState('');

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 ">
      <form className="bg-white px-28 py-8 mt-10 rounded shadow-md w-2/5" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-semibold mb-6 text-center">CREATE ACCOUNT</h2>
        
        <div className='flex items-center gap-6 justify-between'>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">First Name <span className='text-pink-700'>*</span></label>
            <input 
              {...register('firstName', { required: true })} 
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.firstName && <span className="text-red-600">First name is required</span>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Last Name <span className='text-pink-700'>*</span></label>
            <input 
              {...register('lastName', { required: true })} 
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.lastName && <span className="text-red-600">Last name is required</span>}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Mobile Number</label>
          <input 
            {...register('mobileNumber', { required: true })} 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.mobileNumber && <span className="text-red-600">Mobile number is required</span>}
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Street Address</label>
          <input 
            {...register('streetAddress', { required: true })} 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.streetAddress && <span className="text-red-600">Street address is required</span>}
        </div>

        <div className='flex justify-between items-center gap-6'>
          <div className="mb-4 w-[55%]">
            <label className="block font-medium text-gray-700">Country</label>
            <select 
              {...register('country', { required: true })} 
              className="w-full p-2 border border-gray-300 rounded mt-1"
            >
              {
                countryList.map((country , index) => (
                  <option key={index}>{country.name}</option>
                )) 
              }
              {/* Add other countries here */}
            </select>
            {errors.country && <span className="text-red-600">Country is required</span>}
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700">State/Province</label>
            <input 
              {...register('stateProvince', { required: true })} 
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.stateProvince && <span className="text-red-600">State/Province is required</span>}
          </div>
        </div>

        <div className='flex items-center justify-between gap-6'>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">City</label>
            <input 
              {...register('city', { required: true })} 
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.city && <span className="text-red-600">City is required</span>}
          </div>

          <div className="mb-4">
            <label className="block font-medium text-gray-700">Zip/Postal Code</label>
            <input 
              {...register('zipCode', { required: true })} 
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.zipCode && <span className="text-red-600">Zip/Postal code is required</span>}
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Email</label>
          <input 
            {...register('email', { required: true })} 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.email && <span className="text-red-600">Email is required</span>}
        </div>

        <div className="">
          <label className="block font-medium text-gray-700">Password</label>
          <input 
            {...register('password', { required: true })} 
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <PasswordStrengthBar
            password={inputValue}
            minLength={5}
            onChangeScore={(score, feedback) => {
              console.log(score, feedback);
            }}
          />
          {errors.password && <span className="text-red-600">Password is required</span>}
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Confirm Password</label>
          <input 
            {...register('confirmPassword', { required: true })} 
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.confirmPassword && <span className="text-red-600">Confirmation is required</span>}
        </div>

        <div className='flex flex-col items-center justify-center mb-4'>
          <div>All fields are mandatory.</div>
          <div>We will send you a link to verify your email.</div>
        </div>

        <div className="mb-4 gap-4 flex items-center">
          <div className='border border-black w-5 h-5 flex items-center justify-center'>
            <input 
              {...register('subscribeNewsletter')} 
              type="checkbox" 
              className="w-5 h-5 outline-none checked:border-black transition-all duration-200 checked:bg-black checked:w-3 checked:h-3 appearance-none"
            />
          </div>
          <label className="flex items-center">
            Subscribe to the THOT newsletter
          </label>
        </div>

        <button 
          type="submit" 
          className="w-full bg-gray-700 text-white p-2 mb-4 rounded hover:scale-95 transition-all duration-200"
        >
          Sign Up
        </button>

        <div className='text-sm'>
          If you already have an account <button className='underline'>click here</button> to login.
        </div>
      </form>
    </div>
  );
};

export default Signup;
