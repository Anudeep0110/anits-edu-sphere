/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import NavbarComp from './NavbarComp'
import { FaPlus } from "react-icons/fa";
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
import Loader from './Loader'

const CreateForm = () => {

  const [loading, setLoading] = React.useState(true);
    
  const navigate = useNavigate()

  React.useEffect(() => {
      if(atob(localStorage.getItem('role')) !== 'admin') navigate('/')
      else setLoading(false)
  },[])

    const [formname, setFormName] = React.useState('')
    const [role, setRole] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [cols, setCols] = React.useState([])
    const [ncols, setNCols] = React.useState(0)

    const addcolumn = () => {
        setNCols(ncols+1)
        setCols([...cols, {id:ncols + 1, colname:'', type:'text', placeholder:'',name:''}])
    }

    const handlecolname = (e,index) => {
        console.log(index)
        const val = String(e.target.value).trim()
        const tokens = val.split(" ")
        var name = ""
        tokens.forEach(element => {
            let ele = String(element[0]).toUpperCase() + element.slice(1) 
            name += ele
        });
        name = name.charAt(0).toLowerCase() + name.slice(1)
        setCols(cols.map((col) => col.id === index ? {...col, name:name,colname:val} : col))
        console.log(cols)
    }

    const handletype = (e,index) => {
        console.log(index);
        setCols(cols.map((col) => col.id === index ? {...col, type:String(e.target.value).trim()} : col))
    }

    const handleplaceholder = (e,index) => {
        setCols(cols.map((col) => col.id === index ? {...col, placeholder:String(e.target.value).trim()} : col))
    }

    const deleteColumn = (index) => {
        console.log(index)
        setCols(cols.filter((col) => col.id !== index))
    }

    const createform = () => {
        cols.forEach((col) => {
            delete cols['id']
        })
        axios.post('http://localhost:8000/createform',{
            formname:formname,
            role:role,
            desc:description,
            columns:cols,
            iscustom:1
        })
    }
    if(loading) return <Loader />


  return (
    <div className=' bg-slate-100 min-h-screen'>
        <NavbarComp />
        <div className='flex flex-col px-20 py-10'>
            <div className='flex flex-col items-center uppercase px-20'>
                <h1 className='text-4xl font-semibold'>Craft your Forms Here.</h1>
                <p className='text-red-600 font-semibold'>Note : It is a requirement in our forms that every field be mandatory..</p>
            </div>
            <div className='w-full flex min-h-full p-3'>
                <div className=' w-[60%] px-5 flex flex-col gap-4 py-4 border min-h-full'>
                  <div>
                      <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white uppercase">Form Name</label>
                      <input onChange={(e) => setFormName(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Form Name" required />
                  </div>
                  <div>
                        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white uppercase">Role</label>
                        <select onChange={(e) => setRole(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Department" required >
                            <option value='student'>Student</option>
                            <option value='faculty'>Faculty</option>
                            <option value='department'>Department</option>
                            <option value='tnp'>TNP</option>
                            <option value='nss'>NSS</option>
                            <option value='iic'>IIC</option>
                            <option value='iqac'>IQAC</option>
                        </select>
                  </div>
                  <div>
                      <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white uppercase">Description</label>
                      <textarea onChange={(e) => setDescription(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe about your form" required />
                  </div>
                  <div>
                      <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white uppercase">Columns</label>
                  </div>
                  {cols.map((col,index) => {
                    return (
                        <div key={index} className='flex flex-col gap-3 py-3 px-3 w-full border bg-slate-200'>
                            <div className='flex gap-3'>
                                <input type='text' placeholder='NAME OF THE COLUMN' onChange={(e) => handlecolname(e,ncols)} className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-75 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                                <select onChange={(e) => handletype(e,ncols)} type='text' placeholder='TYPE' className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-25 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value='text'>Text</option>
                                    <option value='date'>Date</option>
                                    <option value='textarea'>TextArea</option>
                                </select>
                            </div>
                            <div className='flex gap-3'>
                            <input type='text' onChange={(e) => handleplaceholder(e,ncols) } placeholder='NAME OF THE COLUMN' className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-75 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                            <button onClick={() => deleteColumn(parseInt(col.id))} className="mb-2 w-25 items-center text-lg font-medium bg-slate-900 flex text-white p-2.5 py-1 rounded dark:text-white uppercase">Delete Column</button>
                            </div>
                        </div>
                    )
                  })}
                  <div className='flex w-full justify-between px-3'>
                  <button onClick={addcolumn} className="mb-2 items-center text-lg font-medium bg-slate-900 flex text-white px-3 py-1 rounded dark:text-white uppercase"><FaPlus className='text-lg me-2'/>Add Column</button>
                      <button onClick={createform} className="mb-2 items-center text-lg font-medium bg-slate-900 flex text-white px-3 py-1 rounded dark:text-white uppercase">Submit</button>
                  </div>
                </div>
                <div className='w-[40%]'>
                  <div className='flex flex-col border-2 border-black px-4 py-4'>
                      <h5 className='uppercase text-center text-red-800 text-3xl font-semibold'>Instructions while Drafting a Form</h5>
                      <ul className='list-disc px-5 text-justify font-normal text-xl'>
                          <li>Click on Add Field Button to add new question.</li>
                          <li>Please give the appropriate column name as Label.</li>
                          <li>Adding Instruction helps user to understand the requirement better.</li>
                          <li>Make sure to choose appropriate input type while drafting the Form.</li>
                          <li>Remember the Note point that every field is defaulty managed as Mandatory.</li>
                          <li>Make sure to save the question before clicking on the Add Field Button (exceptional for the first time).</li>
                      </ul>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateForm