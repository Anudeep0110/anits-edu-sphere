import React from 'react'
import NavbarComp from './NavbarComp'
import { FcDepartment } from "react-icons/fc";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loader from './Loader'


const Tnp = () => {
    const [forms,setForms] = React.useState([])
    const [loading, setLoading] = React.useState(true);
const navigate = useNavigate();
    React.useEffect(() => {
        axios.post('http://localhost:8000/getforms',{role:'tnp'})
        .then(res => {
            setForms(res.data)
        })
        setTimeout(() => {
          setLoading(false)
  },2000)
    },[])
   
 if(loading) return <Loader />
    return (
        <div className="bg-slate-100">
          <NavbarComp />
          <div className="container mx-auto px-6 py-12">
            <h1 className="text-3xl md:text-5xl font-semibold mb-12 text-center">Training and Placement Department</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div
                onClick={() => {
                  navigate('/dashboard', { state: { role: 'tnp', fname: 'Training and Placement' } });
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

export default Tnp;





