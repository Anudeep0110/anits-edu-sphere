import React from 'react'
import {FiMenu} from 'react-icons/fi'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
const NavbarComp = () => {
  const navigate = useNavigate()

  
  const logout = () => {
    if (Cookies.get('auth_token_key')) Cookies.remove('auth_token_key')
    Cookies.remove('token')
    navigate('/',{replace:true})
  }

  
  return (
    <>
        <nav className='w-full py-6 bg-slate-100'>
          <label><a className='text-black text-2xl no-underline lg:text-3xl lg:ms-40 font-bold leading-20 ms-10 ' href='/'>EduSphere</a></label>
          <input id='check' type='checkbox' className='check'></input>
          <label htmlFor="check" className='toggle text-black'><FiMenu /></label>
          <ul>
          {!Cookies.get('token') ?
            <li className=' text-black '><a href='/login'>Login</a></li>
            : 
            <li className=' text-black ' onClick={logout}>Logout</li>
            }
          </ul>
        </nav>
    </>
  )
}

export default NavbarComp