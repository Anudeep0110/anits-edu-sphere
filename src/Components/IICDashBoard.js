import React from 'react'
import NavbarComp from './NavbarComp';
import { FcDepartment } from "react-icons/fc";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const IICDashBoard = () => {
    const [forms,setForms] = React.useState([])
const navigate = useNavigate();
    React.useEffect(() => {
        axios.post('http://localhost:8000/getforms',{role:'iic'})
        .then(res => {
            setForms(res.data)
        })
    },[])
   
 
    return (
        <div className="bg-slate-100">
          <NavbarComp />
          <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl md:text-5xl font-semibold mb-12 text-center">Institution's Innovation Council Department</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div
                onClick={() => {
                  navigate('/dashboard', { state: { role: 'iic', fname: 'iic' } });
                }}
                className="text-center">
                <div className="bg-[#1f4886] text-white text-3xl md:text-5xl w-24 md:w-32 h-24 md:h-32 flex items-center justify-center mx-auto mb-4 shadow-md hover:scale-105 hover:shadow-black hover:shadow-lg rounded-lg">
                  <FcDepartment />
                </div>
                <p className="text-sm md:text-md text-gray-900">Fill forms</p>
              </div>
              {forms.map((form, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#1f4886] text-white text-3xl md:text-5xl w-24 md:w-32 h-24 md:h-32 flex items-center justify-center mx-auto mb-4 shadow-md hover:scale-105 hover:shadow-black hover:shadow-lg rounded-lg">
                    <FcDepartment />
                  </div>
                  <p className="text-sm md:text-md text-gray-900">{form.formname}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};

export {IICDashBoard};