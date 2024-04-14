/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import NavbarComp from './NavbarComp'

const CreateForm = () => {

  


  return (
    <div className=' bg-slate-100 min-h-screen'>
        <NavbarComp />
        <div className='flex flex-col px-20 py-20'>
            <div className='flex flex-col items-center uppercase px-20'>
                <h1 className='text-4xl font-semibold'>Craft your Forms Here.</h1>
                <p className='text-red-600 font-semibold'>Note : It is a requirement in our forms that every field be mandatory..</p>
            </div>
            <div className='w-full flex min-h-full p-3'>
                <div className=' w-[60%] px-5 flex flex-col gap-4 py-4 border min-h-full'>
                  <div>
                      <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white uppercase">Form Name</label>
                      <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Form Name" required />
                  </div>
                  <div>
                      <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white uppercase">Role</label>
                      <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Department" required />
                  </div>
                  <div>
                      <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white uppercase">Description</label>
                      <textarea type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe about your form" required />
                  </div>
                  <div>
                      <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white uppercase">Columns</label>
                  </div>
                </div>
                <div className='w-[40%]'>
                  <div className='flex flex-col border-2 border-black px-4 py-4'>
                      <h5 className='uppercase text-center text-red-800 text-3xl font-semibold'>Instructions while Drafting a Form</h5>
                      <ul className='list-disc px-5 text-justify font-normal text-xl'>
                          <li>Click on Add Field Button to add new question.</li>
                          <li>Please give the appropriate column name as Label.</li>
                          <li>Adding Instruction helps user to understand the requirement better.</li>
                          <li>Make sure to choose appropriate input type while drafting the Form.</li>
                          <li>Remember the Note point that every field is defaulty managed as Mandatory.</li>
                          <li>Make sure to save the question before clicking on the Add Field Button (exceptional for the first time).</li>
                      </ul>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateForm