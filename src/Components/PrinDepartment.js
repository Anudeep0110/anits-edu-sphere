import React from 'react'
import NavbarComp from './NavbarComp'
import { FcDepartment } from "react-icons/fc";

const PrinDepartment = () => {

    const cards = [
        {name:'CSMD',redirect:'/principal/departments/csmd',icon:<FcDepartment />},
        {name:'CSE',redirect:'/principal/departments/cse',icon:<FcDepartment />},
        {name:'ECE',redirect:'/principal/departments/ece',icon:<FcDepartment />},
        {name:'EEE',redirect:'/principal/departments/eee',icon:<FcDepartment />},
        {name:'MECH',redirect:'/principal/departments/mech',icon:<FcDepartment />},
        {name:'CIVIL',redirect:'/principal/departments/civil',icon:<FcDepartment />},
        {name:'IT',redirect:'/principal/departments/it',icon:<FcDepartment />},
    ]

  return (
    <div className='h-screen w-full bg-slate-100'>
        <NavbarComp />
        <div className='w-full h-full border flex flex-col items-center'>
            <div className=' md:w-[80%] w-[95%] p-12'><h1 className='text-xl md:text-3xl font-semibold float-left'>All the Departments here</h1></div>
            <div className='p-10 md:w-[80%] w-full flex flex-wrap md:gap-12 gap-x-24 gap-y-3'>
                {cards.map((card,index) => {
                    return (
                        <div className='flex flex-col text-center font-semibold hover:font-bold text-gray-900'>
                        <div key={index} onClick={() => {window.location.href=card.redirect}} className='bg-[#1f4886] rounded text-white font-medium md:text-5xl text-3xl shadow hover:scale-105 hover:shadow-black hover:shadow-lg flex justify-center items-center w-[75px] md:w-[100px] md:h-[100px] h-[75px]'>{card.icon}</div>
                        <p className='text-black md:text-lg text-xs'>{card.name}</p>
                        </div>
                )}
                )}          
            </div>
        </div>
    </div>
  )
}

export default PrinDepartment