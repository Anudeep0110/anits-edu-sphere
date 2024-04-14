import React from 'react'
import NavbarComp from './NavbarComp'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-slate-100 min-h-screen'>
        <NavbarComp />
        <div className='h-full flex flex-col p-20 px-40'>
            <div className='font-bold '>
                <h1>Welcome to Admin Settings</h1>
            </div>
            <div className='md:w-[85%] w-[99%] md:p-12 p-3 gap-x-4 gap-y-5 flex flex-wrap justify-center sm:justify-start '>
          <div className='flex flex-col justify-center hover:drop-shadow-2xl hover:scale-110 hover:font-bold items-center'>
            <div onClick={() => navigate('/import/students')} className='md:w-[200px] md:h-[200px] w-[150px]  h-[150px] rounded-md'>
              <img src='/assets/prinstudent.png' className=' mix-blend-multiply' alt='Student'></img>
            </div>
            <p className='p-1 text-2xl font-semibold'>Import Student</p>
          </div>
          <div onClick={() => navigate('/import/faculty')} className='flex flex-col justify-center hover:drop-shadow-2xl hover:scale-110 hover:font-bold items-center'>
            <div className='md:w-[200px] md:h-[200px] w-[150px]  h-[150px] rounded-md'>
              <img src='/assets/printeacher.png' className=' mix-blend-multiply' alt='Student'></img>
            </div>
            <p className='p-1 text-2xl font-semibold'>Import Faculty</p>
          </div>
          <div onClick={() => navigate('/formbuilder')} className='flex flex-col justify-center hover:drop-shadow-2xl hover:font-bold items-center'>
            <div className='md:w-[200px] flex justify-center items-center md:h-[200px] w-[150px]  h-[150px] rounded-md'>
              <img src='/assets/task.png' className=' mix-blend-multiply scale-110 hover:scale-125' alt='Student'></img>
            </div>
            <p className='p-1 text-2xl font-semibold'>FormBuilder</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Admin