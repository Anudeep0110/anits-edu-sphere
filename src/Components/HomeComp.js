import React from 'react'
import NavbarComp from './NavbarComp'
const HomeComp = () => {
  return (
    <div className='body'>
      <div className='navbar'><NavbarComp /></div>
      <div className='landing-page-content'>
        <div className='heading'>
            <div className='img-div'><img src='assets/land.png' alt='Landing'></img></div>
            <div className='head'>
              <p>Welcome to</p>
              <p>Anits EduSphere</p>
              <p>Unlock Your Potential: Navigate your academic voyage effortlessly. Students, faculty,
                departments, and principals — seamless access to tailored dashboards for your success.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeComp 