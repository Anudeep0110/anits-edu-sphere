import React from 'react';
import NavbarComp from './NavbarComp'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function AdventureSection() {
  const Navigate = useNavigate();

  const logout = () => {
    if (Cookies.get('auth_token_key')) Cookies.remove('auth_token_key')
    Cookies.remove('token')
    Navigate('/')
  }

  return (
    <div>
      <NavbarComp />
      <section class="text-gray-600 body-font bg-slate-100">
        <div class="lg:container mx-auto flex px-5 py-24 h-[calc(100vh-90px)] lg:flex-row  flex-col items-center">
          <div class="lg:flex-grow md:w-4/5 lg:text-left lg:pr-24 flex flex-col md:items-start md:text-center mb-16 md:mb-0 items-center text-center">
            <h2 className='title-font font-bold md:text-6xl lg:text-left w-full lg:w-auto text-center text-3xl mb-8 text-gray-900'>Welcome to</h2>
            <h1 class="title-font lg:text-7xl lg:text-left md:text-6xl w-full lg:w-auto text-4xl mb-6  font-bold leading-snug text-gray-900">ANITS Edusphere</h1> 
            <p class="mb-8 leading-relaxed md:text-left font-medium md:text-xl text-lg">Unlock Your Potential: Navigate your academic voyage effortlessly. Students, faculty, departments, and principals — seamless access to tailored dashboards for your success.</p>
            <div class="flex justify-center items-center md:w-full lg:items-start lg:w-auto">
            {Cookies.get('token') ?<button class="inline-flex text-white hover:bg-[rgba(24,61,103,.9)]  bg-[#183d76] border-0 py-2 px-6 focus:outline-none rounded text-lg font-bold" onClick={logout}>Logout</button>
              :<button class="inline-flex text-white hover:bg-[rgba(24,61,103,.9)]  bg-[#183d76] border-0 py-2 px-6 focus:outline-none rounded text-lg font-bold" onClick={() => Navigate('/login')}>LogIn</button>}
            </div>
          </div>
          <div class="lg:w-5xl md:w-3/4 w-5/6">
            <img class="object-cover object-center rounded mix-blend-multiply" alt="hero" src="/assets/dash.jpg"></img>
          </div>
        </div> 
      </section>
    </div>
  );
}

export default AdventureSection;











// import React from 'react'
// import NavbarComp from './NavbarComp'
// const HomeComp = () => {
//   return (
//     <div className='body'>
//       <div className='navbar'><NavbarComp /></div>
//       <div className='landing-page-content'>
//         <div className='heading'>
//             <div className='img-div'><img src='assets/land.png' alt='Landing'></img></div>
//             <div className='head'>
//               <p>Welcome to</p>
//               <p>Anits EduSphere</p>
//               <p>Unlock Your Potential: Navigate your academic voyage effortlessly. Students, faculty,
//                 departments, and principals — seamless access to tailored dashboards for your success.</p>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HomeComp 