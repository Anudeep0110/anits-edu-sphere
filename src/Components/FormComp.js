import React from 'react'
import Input from './Input'
import Formdescript from './Formdescript'
import { useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import Loader from './Loader'
import axios from 'axios'
import Textarea from './Textarea'

const FormComp = () => {

    const location = useLocation();
    const [form,setForm] = React.useState({})
    const [isloading,setIsloading] = React.useState(true);
    const [formdata,setFormdata] = React.useState({})
    const [status,setStatus] = React.useState(false)

    const handleChange = (e) => {
        e.preventDefault();
        setFormdata({...formdata,[e.target.name]:e.target.value})
    }
    React.useEffect(() => {
        axios.post('http://localhost:8000/getform',{id:location.state.id})
        .then(res => {
            setForm(res.data)
            setIsloading(false);
        })
    },[location.state.id])

    const submitted = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/sendtodb',{data:formdata,formid:location.state.id})
        .then(res => {
            console.log(res.data);
            setStatus(true);    
            toast.success('Data Saved successfully!',{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
        .catch(err => {
            console.log(err);
            setStatus(false);
            toast.error('Data not saved! Please Try Again Later!',{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
    }


return (
<>  
{isloading ? <Loader/> : 
<div className='h-screen'> 
    <ToastContainer/>   
    <div className='absolute top-0 left-0 flex w-100 flex-col overflow-y-scroll lg:flex-row'>
        <div className='flex flex-col gap-5 py-10 items-center w-full h-screen lg:w-1/2 '>
            <h1 className='text-xl text-center md:text-2xl lg:text-3xl text-black font-bold '>{form.formname}</h1>
            <form className='w-full flex gap-5 pb-16 flex-col items-center' onSubmit={submitted}>
                {form.columns.map((column,index) => {
                    if(column.type === 'textarea'){
                    return(
                        <Textarea key={index} label={column.colname} onChange={handleChange} name={column.name} placeholder={column.placeholder} type={column.type} isDisable={false}/>
                        )}else{
                            return (
                        <Input key={index} label={column.colname} name={column.name} onChange={handleChange} placeholder={column.placeholder} type={column.type} isDisable={false}/>
                    )
                    }
                })}
                <div className='w-[70%] flex flex-col mt-4 gap-3'>
                    <button type='submit' disabled={status} className='bg-slate-900 h-10 text-white rounded-md'>Submit</button>
                </div>
            </form> 
        </div>
        <Formdescript describe='It ensures user authentication, safeguarding sensitive data and privacy.
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
            and the overall functionality of the college dashboard.' title='Transforming the college experience'>
        </Formdescript>
    </div> 
</div>}
</>
)
}

export default FormComp 