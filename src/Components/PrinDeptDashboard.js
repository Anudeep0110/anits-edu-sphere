import React from 'react'
import { useParams } from 'react-router-dom'
import NavbarComp from './NavbarComp';

const PrinDeptDashboard = () => {

    const { dept } = useParams();
  return (
    <div className='h-screen'>
        <NavbarComp />
        <div className='w-full h-full bg-slate-100 flex flex-col items-center'>
          <div className='p-4 my-4 w-full text-center text-2xl font-semibold'>
            Welcome to <span className='text-4xl font-bold'>{dept.toLocaleUpperCase()}</span> Department Dashboard
          </div>
        <div className='md:w-[85%] w-[99%] md:p-12 p-3 gap-x-4 gap-y-5 flex flex-wrap justify-center sm:justify-start '>
            <div className='md:w-[200px] md:h-[200px] w-[150px] h-[150px] rounded-md hover:shadow-lg border border-black'></div>
            <div className='md:w-[200px] md:h-[200px] w-[150px] h-[150px] rounded-md hover:shadow-lg border border-black'></div>
            <div className='md:w-[200px] md:h-[200px] w-[150px] h-[150px] rounded-md hover:shadow-lg border border-black'></div>
            <div className='md:w-[200px] md:h-[200px] w-[150px] h-[150px] rounded-md hover:shadow-lg border border-black'></div>
        </div>

        </div>         
    </div>
  )
}

export default PrinDeptDashboard