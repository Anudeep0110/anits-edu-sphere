import React from 'react'
import Input from './Input'

const FormComp = () => {
return (
<>   
<div className='h-screen'> 
    <div className='absolute top-0 left-0 flex w-100 flex-col overflow-y-scroll lg:flex-row'>
        <div className='flex flex-col gap-5 py-10 items-center w-full h-screen lg:w-1/2 '>
            <h1 className='text-xl text-center md:text-2xl lg:text-3xl text-black font-bold '>Awards / Special Achievements / Records</h1>
            <form className='w-full flex gap-5 flex-col items-center'>
                <Input label='Name of the Faculty' placeholder={'Alice'} type={'text'} isDisable={true}/>
                <Input label='Department' placeholder={'CSM'} type={'text'} isDisable={true}/>
                <Input label='Name of the Award / Recognition' placeholder={''} isDisable={false} type={'text'}/>
                <Input label='Name of the Awarding government/government recognised body' isDisable={false} placeholder={''} type={'text'}/>
                <Input label='Date of Achievement' placeholder={''} isDisable={false} type={'date'}/>
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