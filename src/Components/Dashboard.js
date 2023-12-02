/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import NavbarComp from './NavbarComp'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const HomeComp = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [forms,setForms] = React.useState([])

    React.useEffect(() => {
        axios.post('http://localhost:8000/getforms',{role:location.state.role})
        .then(res => {
            setForms(res.data)
        })
    },[])





  return (
      <div className='h-screen w-full bg-slate-100'>
        <NavbarComp />
        <div className='w-full flex justify-center'>
            <div className='md:w-[80%] p-4 w-[90%] flex justify-between'>
                <p className='my-auto text-3xl font-semibold'>Welcome <span className='font-bold'>{location.state.fname}</span></p>
                    <input type='search' placeholder='Search here...' className='w-[350px] bg-gradient-to-bl from-[#183d76] to-[#000] rounded text-white placeholder:text-white font-semibold py-3 px-3 outline-none focus:outline-none'></input>
            </div>
        </div>
        <div className='flex justify-center flex-wrap items-center gap-10 w-full my-10'>
            {forms.map((form,index) => {
                return (
                        <div key={index} onClick={() => {navigate('/form',{state:{id:form._id}})}} className='flex items-center hover:scale-105 md:w-[80%] w-[90%] px-3 py-4 rounded text-md md:text-lg justify-center bg-gradient-to-r from-[#183d76] to-[#000] text-white'>
                        <p className='my-auto'>{form.formname}</p>
                    </div>
                )
            })}
        </div>
      </div>
  )
}

export default HomeComp