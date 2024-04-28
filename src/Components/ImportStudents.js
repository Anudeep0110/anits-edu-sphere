/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import NavbarComp from './NavbarComp'
import { FaFileCsv } from "react-icons/fa6";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const ImportStudents = () => {

  const [loading, setLoading] = React.useState(true);
    
  const navigate = useNavigate()

  React.useEffect(() => {
      if(atob(localStorage.getItem('role')) !== 'admin') navigate('/')
      else {
        setTimeout(() => {
            setLoading(false)
    },2000)
    }
  },[])

    const [file,setFile] =React.useState();
    const formdata = new FormData();
    const [filename,setFname] = React.useState('Upload file')

    const uploadFile = async () => {
        console.log("Calling");
        formdata.append('file',file)
        formdata.append('filename',file.name)
        await axios.post('http://localhost:8000/importapi/addstudent',formdata,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        .then((res) => {
            if(res.status === 200){
                if(res.data === 'success'){
                    toast.success('Student Data succesfully Updated.', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    setTimeout(() => {
                        navigate('/admin')
                    },5000)
                }else{
                    toast.error('Student Data Updation Failed', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                        setTimeout(() => {
                            navigate('/import/students')
                        },5000)
                }
            }
        })
        .catch(err => {
            toast.error('Something Went wrong! Please Try Again!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                setTimeout(() => {
                    navigate('/import/students')
                },5000)
        })
    }
    
    if(loading) return <Loader />

  return (
    <div className=' min-h-screen bg-slate-100'>
        <NavbarComp />
        <ToastContainer />
        <div className='flex flex-col justify-center items-center gap-12 px-40 py-20'>
            <h2 className='font-bold'>Add Students From Here</h2>
            <h3>Upload your Excel file here</h3>
            <label className="font-semibold bg-black px-20 py-2 text-white" htmlFor="fileUpload">
                <input onChange={(e) => {setFile(e.target.files[0]);setFname(e.target.files[0].name)}} type="file" className="hidden" id="fileUpload"/>
                {filename}
            </label>
            <h3 className='text-2xl'>Are you first time here ?</h3>
            <div className='flex gap-3 py-2 justify-center items-center'>
                <FaFileCsv className='text-3xl text-blue-600'/>
                <a href='/assets/students_template.xlsx' download>
                    <h4  className='text-2xl text-blue-600'>Students Data Template</h4>
                </a>
            </div>
            <button onClick={uploadFile} className='px-16 rounded bg-black text-white py-2 font-semibold'>Upload the Data</button>
            <h4>Thank you uploading the data. Let me handle it :)</h4>
        </div>
    </div>
  )
}

export default ImportStudents