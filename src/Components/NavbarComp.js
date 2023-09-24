import React from 'react'
import {FiMenu} from 'react-icons/fi'
const NavbarComp = () => {
  return (
    <>
        <nav className='w-full py-6 bg-white dark:bg-gray-900'>
          <label><a className='text-black text-2xl lg:text-3xl lg:ms-40 font-semibold leading-20 ms-10 dark:text-white' href='/'>EduSphere</a></label>
          <input id='check' type='checkbox' className='check'></input>
          <label htmlFor="check" className='toggle dark:text-white text-black'><FiMenu /></label>
          <ul>
            <li className=''><a href='/login'>Login</a></li>
          </ul>
        </nav>
      

    </>
  )
}

export default NavbarComp