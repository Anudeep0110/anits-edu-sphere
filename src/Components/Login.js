import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import CryptoJs from 'crypto-js'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
  const Navigate = useNavigate();

  const [uname,setUname] = React.useState('');
  const [pwd,setPwd] = React.useState('');
  const [err,setErr] = React.useState('');

  const isLabelHidden = uname.trim() !== '';
  const isLabelHid = pwd.trim() !== '';

  const Submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/login',{uname:uname,pwd:pwd})
    .then((res) => {
      if(res.data.login){
        var cipher = CryptoJs.AES.encrypt(uname,'qa1!@dnwnnk#$^123').toString()
        Cookies.set('token',cipher,{expires:1})
        const role = res.data.role;
        localStorage.setItem('role',btoa(role))
        if(role === 'principal') Navigate('/principal',{state:{role:res.data.role,fname:res.data.fname}})
        else if(role === 'department') Navigate(`/department/${res.data.dept}`,{state:{role:res.data.role,fname:res.data.fname,dept:res.data.dept}})
        else if(role === 'student') Navigate(`/student/${res.data.regno}`,{state:{role:res.data.role,fname:res.data.fname}})
        else if(role === 'faculty') Navigate(`/faculty/${res.data.regno}`,{state:{role:res.data.role,fname:res.data.fname,dept:res.data.dept}})
        else if(role === 'nss') Navigate('/nss',{state:{role:res.data.role,fname:res.data.fname}})
        else if(role === 'iic') Navigate('/iic',{state:{role:res.data.role,fname:res.data.fname}})
        else if(role === 'iqac') Navigate('/iqac',{state:{role:res.data.role,fname:res.data.fname}})
        else if(role === 'tnp') Navigate('/tnp',{state:{role:res.data.role,fname:res.data.fname}})
        else if(role === 'admin'){
          var admin = CryptoJs.AES.encrypt('adminsettings','qa1!@dnwnnk#$^123').toString()
          Cookies.set('auth_token_key',admin,{expires:1/24})
          Navigate('/admin',{state:{role:res.data.role,fname:res.data.fname}})
        }
      }else{
        setErr("*Invalid username or password")
      }
    })
    .catch((err) => {
      setErr("Check your Internet Connection and try again..!!")
    })
  }

return (
    <>
    <section className="gradient-form h-full lg:h-screen bg-slate-100 ">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 ">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg ">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 flex flex-col items-center md:p-12">
                    <div className="text-center">
                      <h1 className='text-4xl sm:text-6xl font-bold my-12 bg-gradient-to-r from-[#183d67]  to-[#000] inline-block text-transparent bg-clip-text'>ANITS</h1>
                      <h4 className="mb-12 mt-1 pb-1 text-2xl font-semibold">
                        Welcome Back ..!!
                      </h4>
                    </div>

                    <form className='w-3/4 flex flex-col'>

                      <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                          type="text"
                          className="peer min-h-[auto] w-full bg-transparent px-3 py-[1rem]  border-b-[1px] border-b-black  leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                          value={uname}
                          onChange={(e) => setUname(e.target.value)}
                        />
                        <label
                          htmlFor="exampleFormControlInput1"
                          className={`pointer-events-none absolute  left-3 top-0 mb-0  max-w-[90%] origin-[0_0] truncate pt-[2] leading-[3.5] text-[#183d67] transition-all duration-200 ease-out ${
                            isLabelHidden ? 'hidden' : ''
                          }`}>
                          Username
                        </label>
                      </div>

                      <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                          type="password"
                          className="peer block min-h-[auto] w-full bg-transparent border-b-[1px] border-b-black px-3 py-[1rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          placeholder="Password"
                          value={pwd}
                          onChange={(e) => setPwd(e.target.value)}
                        />
                        <label
                          htmlFor="exampleFormControlInput11"
                          className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[2] leading-[3.5] text-[#183d67] transition-all duration-200 ease-out ${
                            isLabelHid ? 'hidden' : ''
                          }`}
                        > 
                          Password
                        </label>
                      </div>

                      <span className='text-red-500 mt-5'>{err}</span>
                      <div className="mb-12 pb-1 pt-4 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          style={{
                            background: 'linear-gradient(to right, #183d67, #000)',
                          }}
                          onClick={Submit}
                        >
                          Log in
                        </button>

                        <a href="/sforgot">Forgot password?</a>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background: 'linear-gradient(to right, #183d67, #000)',
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-2xl font-semibold">
                    Transforming the college experience
                    </h4>
                    <p className="text-md text-justify">
                    It ensures user authentication, safeguarding sensitive data and privacy.
                     Once logged in, users benefit from a personalized experience, 
                     enabling them to view their own progress, update information, 
                     and tailor settings to their liking. This system fosters accountability,
                      as users are more inclined to actively engage with and maintain their records.
                       It also allows for facilitates data tracking and analytics,
                        and grants access control based on roles, ensuring that students, faculty, and 
                        staff only see relevant information. Moreover, it bolsters security
                         through encryption and multi-factor authentication, 
                         collects user feedback, and ensures legal compliance. 
                         Overall, a login system enhances user engagement, data protection,
                          and the overall functionality of the college dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
)}
