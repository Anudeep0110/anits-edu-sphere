import React from 'react'

const FormComp = () => {
return (
<>   
<div className='h-screen'> 
    <div className='absolute top-0 left-0 flex w-100 flex-col overflow-y-scroll lg:flex-row'>
        <div className='flex flex-col gap-5 py-10 items-center w-full h-screen lg:w-1/2 '>
            <h1 className='text-xl text-center md:text-2xl lg:text-3xl text-black font-bold '>Awards / Special Achievements / Records</h1>
            <form className='w-full flex gap-5 flex-col items-center'>
                <div className='w-[70%] flex flex-col gap-3'>
                    <label className='ps-1 text-md font-semibold text-black block'>Name of the Faculty</label>
                    <input type='text' placeholder='Alice' disabled='true' className='w-full text-md border h-10 px-2 border-black rounded-md '></input>
                </div>
                <div className='w-[70%] flex flex-col gap-3'>
                    <label className='text-md font-semibold text-black block'>Department</label>
                    <input type='text' placeholder='CSM' disabled='true' className='w-full text-md border h-10 px-2 border-black rounded-md '></input>
                </div> 
                <div className='w-[70%] flex flex-col gap-3'>
                    <label className='text-md font-semibold text-black block'>Name of the Award / Recognition</label>
                    <input type='text' placeholder='' className='w-full text-md border h-10 px-2 border-black rounded-md '></input>
                </div> 
                <div className='w-[70%] flex flex-col gap-3'>
                    <label className='text-md font-semibold text-black block'>Name of the Awarding government/government recognised body </label>
                    <input type='text' placeholder='' className='w-full text-md border h-10 px-2 border-black rounded-md '></input>
                </div>
                <div className='w-[70%] flex flex-col gap-3'>
                    <label className='text-md font-semibold text-black block'>Date of Achievement</label>
                    <input type='date' placeholder='' className='w-full text-md border h-10 px-2 border-black rounded-md '></input>
                </div>
                <div className='w-[70%] flex flex-col mt-4 gap-3'>
                    <button type='submit' className='bg-slate-900 h-10 text-white rounded-md'>Submit</button>
                </div>
            </form> 
        </div>
        <div className='fixed right-0 bottom-0 h-full flex justify-center flex-col items-center lg:px-12 md:px-0
            overflow-y-hidden w-0 lg:w-1/2 text-white font-semibold
            rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none' 
            style={{ 
                background: 'linear-gradient(to right, #183d67, #000)',
            }}>
            {/* <img src={'/assets/flogin.jpg'} className='h-screen' alt='Flogin'></img> */}
            <h4 className="mb-6 text-3xl font-bold">
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
</>
)
}

export default FormComp