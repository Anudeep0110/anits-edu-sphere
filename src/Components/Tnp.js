import React from 'react'
import NavbarComp from './NavbarComp'
import { FcDepartment } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Tnp = () => {
    const [forms,setForms] = React.useState([])
const navigate = useNavigate();
    React.useEffect(() => {
        axios.post('http://localhost:8000/getforms',{role:'tnp'})
        .then(res => {
            setForms(res.data)
        })
    },[])
   
  return (
    <div className='h-screen w-full bg-slate-100'>
        <NavbarComp />
        <div className='w-full h-full flex flex-col items-center'>
            <div className=' md:w-[80%] w-[95%] p-12'><h1 className='text-xl md:text-3xl font-semibold float-left'>Welcome Principal ANITS,</h1></div>
            <div className='p-10 md:w-[80%] w-full flex flex-wrap md:gap-12 gap-x-24 gap-y-3'>
            <div className='flex flex-col text-center font-semibold hover:font-bold text-gray-900'>
                        <div onClick={() => {navigate('/dashboard',{state:{role:'tnp',fname:'Traning and Placement'}})}} className='bg-[#1f4886] rounded text-white font-medium md:text-5xl text-3xl shadow hover:scale-105 hover:shadow-black hover:shadow-lg flex justify-center items-center w-[75px] md:w-[100px] md:h-[100px] h-[75px]'><FcDepartment /></div>
                        <p className='text-black md:text-md text-xs'>Fill the form</p>
                        </div>
                {forms.map((form,index) => {
                    return (
                        <div className='flex flex-col text-center font-semibold hover:font-bold text-gray-900'>
                        <div key={index} className='bg-[#1f4886] rounded text-white font-medium md:text-5xl text-3xl shadow hover:scale-105 hover:shadow-black hover:shadow-lg flex justify-center items-center w-[75px] md:w-[100px] md:h-[100px] h-[75px]'><FcDepartment /></div>
                        <p className='text-black md:text-md text-xs'>{form.formname}</p>
                        </div>
                )}
                )}          
            </div>
        </div>
    </div>
  )
}

export default Tnp;

