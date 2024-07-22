import React from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 mt-10">
      <form className="bg-white p-8 rounded shadow-md w-2/5" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input 
            {...register('firstName', { required: true })} 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.firstName && <span className="text-red-600">First name is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input 
            {...register('lastName', { required: true })} 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.lastName && <span className="text-red-600">Last name is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Mobile Number</label>
          <input 
            {...register('mobileNumber', { required: true })} 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.mobileNumber && <span className="text-red-600">Mobile number is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Street Address</label>
          <input 
            {...register('streetAddress', { required: true })} 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.streetAddress && <span className="text-red-600">Street address is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Country</label>
          <select 
            {...register('country', { required: true })} 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          >
            <option value="India">India</option>
            {/* Add other countries here */}
          </select>
          {errors.country && <span className="text-red-600">Country is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">State/Province</label>
          <input 
            {...register('stateProvince', { required: true })} 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.stateProvince && <span className="text-red-600">State/Province is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">City</label>
          <input 
            {...register('city', { required: true })} 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.city && <span className="text-red-600">City is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Zip/Postal Code</label>
          <input 
            {...register('zipCode', { required: true })} 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.zipCode && <span className="text-red-600">Zip/Postal code is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input 
            {...register('email', { required: true })} 
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.email && <span className="text-red-600">Email is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input 
            {...register('password', { required: true })} 
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.password && <span className="text-red-600">Password is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input 
            {...register('confirmPassword', { required: true })} 
            type="password"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.confirmPassword && <span className="text-red-600">Confirmation is required</span>}
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input 
              {...register('subscribeNewsletter')} 
              type="checkbox" 
              className="form-checkbox"
            />
            <span className="ml-2">Subscribe to the THOT newsletter</span>
          </label>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input 
              {...register('notRobot', { required: true })} 
              type="checkbox" 
              className="form-checkbox"
            />
            <span className="ml-2">I'm not a robot</span>
          </label>
          {errors.notRobot && <span className="text-red-600">Please confirm you're not a robot</span>}
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
