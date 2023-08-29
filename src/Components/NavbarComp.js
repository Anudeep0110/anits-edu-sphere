import React from 'react'
import {FiMenu} from 'react-icons/fi'
const NavbarComp = () => {
  return (
    <>
        <nav>
          <label className='logo'><a href='/'>EduSphere</a></label>
          <input id='check' type='checkbox' className='check'></input>
          <label htmlFor="check" className='toggle'><FiMenu /></label>
          <ul>
            <li><a href='/plogin'>Principal</a></li>
            <li><a href='/dlogin'>Department</a></li>
            <li><a href='/flogin'>Faculty</a></li>
            <li><a href='/slogin'>Student</a></li>
          </ul>
        </nav>
    </>
  )
}

export default NavbarComp