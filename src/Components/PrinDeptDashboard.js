import React from 'react'
import { useParams } from 'react-router-dom'
import NavbarComp from './NavbarComp';

const PrinDeptDashboard = () => {

    const { dept } = useParams();
  return (
    <div className='h-screen'>
        <NavbarComp />
        <div className='w-full h-full bg-slate-100 flex flex-col items-center'>
        <div className='md:w-[85%] w-[99%] md:p-12 p-3 gap-x-4 gap-y-5 flex flex-wrap justify-center sm:justify-start '>
            <div className='md:w-[250px] md:h-[250px] w-[150px] h-[150px] rounded-md hover:shadow-lg border border-black'></div>
            <div className='md:w-[250px] md:h-[250px] w-[150px] h-[150px] rounded-md hover:shadow-lg border border-black'></div>
            <div className='md:w-[250px] md:h-[250px] w-[150px] h-[150px] rounded-md hover:shadow-lg border border-black'></div>
            <div className='md:w-[250px] md:h-[250px] w-[150px] h-[150px] rounded-md hover:shadow-lg border border-black'></div>
        </div>

        </div>         
    </div>
  )
}

export default PrinDeptDashboard