import React from 'react'

export const Login = () => {
return (
    <>
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg  bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex  lg:flex-wrap">
                <div className="px-4  md:px-0 lg:w-6/12">
                  <div className="md:mx-6 flex flex-col items-center md:p-12">
                    <div className="text-center">
                      <h1 className='text-4xl sm:text-6xl font-bold my-12 bg-gradient-to-r from-orange-600 via-red-500 to-pink-700 inline-block text-transparent bg-clip-text'>ANITS</h1>
                      <h4 className="mb-12 mt-1 pb-1 text-2xl font-semibold">
                        Welcome Back ..!!
                      </h4>
                    </div>

                    <form className='w-3/4 flex flex-col'>
                      <div
                        className="relative mb-6"
                        data-te-input-wrapper-init
                      >
                        <input
                          type="text"
                          className="peer min-h-[auto] w-full bg-transparent px-3 py-[1rem] border-b-[1px] border-b-black dark:border-b-white leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                        />
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.5rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Username
                        </label>
                      </div>

                      <div
                        className="relative mb-6"
                        data-te-input-wrapper-init
                      >
                        <input
                          type="password"
                          className="peer block min-h-[auto] w-full bg-transparent border-b-[1px] border-b-black dark:border-b-white px-3 py-[1rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          placeholder="Password"
                        />
                        <label
                          htmlFor="exampleFormControlInput11"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.5rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Password
                        </label>
                      </div>

                      <div className="mb-12 pb-1 pt-4 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          style={{
                            background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                          }}
                        >
                          Log in
                        </button>

                        <a href="#!">Forgot password?</a>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
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
