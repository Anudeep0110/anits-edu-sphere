import React from 'react'
import NavbarComp from './NavbarComp'
import GlobalSearch from './GlobalSearch'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';



const Principal = () => {
    const Navigate = useNavigate();


    const cards = [
        {name:'Departments',redirect:'/principal/departments',icon:<img className='hover:drop-shadow-lg hover:scale-125' src='/assets/dept.webp' alt=''></img>},
        {name:'NSS',redirect:'/principal/nss',icon:<img className='hover:drop-shadow-lg hover:scale-125' src='/assets/nss.png' alt=''></img>},
        {name:'IQAC',redirect:'/principal/iqac',icon:<img className='hover:drop-shadow-lg hover:scale-125' src='/assets/iqac.png' alt=''></img>},
    ]
    const handleSearch = (searchText) => {
        // Perform your search logic here using the searchText
        axios.post('http://localhost:8000/verify_query',{searchText:searchText})
        .then((res) => {
            if(res.data.role == 'student'){
                Navigate(`/student/${searchText}`)
            }else if(res.data.role == 'faculty'){
                Navigate(`/faculty/${searchText}`)
            }else if(res.data.role == 'no_role'){
                toast.error('Invalid Data! Please Try Again Later!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                Navigate(`/principal`)
            }
        })
      };


  return (
    <div className='min-h-screen w-full bg-slate-100'>
        <ToastContainer/>   
        <NavbarComp />
        <GlobalSearch onEnter={handleSearch}/>
        <div className='w-full h-full flex flex-col items-center'>
            <div className=' md:w-[80%] w-[95%] p-12'><h1 className='text-xl md:text-3xl font-semibold float-left'>Welcome Principal ANITS,</h1></div>
            <div className='p-10 md:w-[80%] w-full flex flex-wrap md:gap-24 gap-x-8 gap-y-3'>
                {cards.map((card,index) => {
                    return (
                        <div className='flex flex-col text-center font-semibold hover:font-bold text-gray-900'>
                        <div key={index} onClick={() => {window.location.href=card.redirect}} className='rounded text-white font-medium md:text-5xl text-3xl  hover:scale-10 hover:drop-shadow-lg flex justify-center items-center w-[100px] md:w-[150px] md:h-[150px] h-[100px]'>{card.icon}</div>
                        <p className='text-black md:text-xl text-xs'>{card.name}</p>
                        </div>
                )}
                )}          
            </div>
        </div>
    </div>
  )
}

export default Principal