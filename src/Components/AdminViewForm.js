import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import NavbarComp from './NavbarComp'

const AdminViewForm = () => {
    const [formdata,setFormdata] = React.useState([])
    const [fname,setFname] = React.useState('')
    const {id} = useParams()
    React.useEffect(() => {
        axios.post('http://localhost:8000/formapi/getformdata',{
            id:id
        })
        .then((res) => {
            console.log(res.data);
            setFname(res.data.formname) 
            setFormdata(res.data.columns)
        })
        .catch(err => {
            console.log(err)
        })
    },[id])
    console.log(formdata);
    console.log(typeof formdata);
  return (
    <div className='min-h-screen bg-slate-100 flex flex-col '>
        <NavbarComp/>
        {formdata ? 
        
        <div className='flex flex-col gap-3 px-40 pt-20'>
            <h1 className='text-3xl font-semibold text-center'>{fname}</h1>
            <div className='flex flex-col gap-3 py-20'>
                {formdata.map((data,index) => {
                    return(
                        <div className='w-full border rounded-xl border-slate-900 hover:shadow-2xl px-10 py-2 flex flex-col gap-2'>
                            <h5 className=''>Field No. : <span className='font-normal'>{index+1}</span></h5>
                            <h5 className=''>Column Name : <span className='font-normal'>{data.colname}</span></h5>
                            <h5 className=''>Instruction : <span className='font-normal'>{data.placeholder}</span></h5>
                            <h5 className=''>Input Type : <span className='font-normal'>{data.type}</span></h5>
                            <h5 className=''>is Mandatory : <span className='font-semibold text-green-700'>Yes</span></h5>
                        </div>
                    )
                })}
            </div>
        </div>
        
        :<h1>Loading...</h1>}
    </div>
  )
}

export default AdminViewForm