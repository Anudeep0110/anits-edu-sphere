import React, { useRef } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import NavbarComp from './NavbarComp';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import { GrTableAdd } from "react-icons/gr";
import Loader from './Loader';

const PrinDeptDashboard = () => {
  const location = useLocation();
  const ref = useRef();
  const path = location.pathname.split('/');
  const [loading, setLoading] = React.useState(true);
  const [tabledata, setTabledata] = React.useState({
    columns: [
      {
        label: 'Icon',
        field: 'icon',
        sort: 'asc',
        width: 50
      },
      {
        label: 'Form Name',
        field: 'fname',
        sort: 'asc',
        width: 400
      },
      {
        label: 'Action',
        field: 'action',
        sort: 'asc',
        width: 250,
        searchable: true
      },
    ],
    rows: []
  });

  const navigate = useNavigate();
  const { dept } = useParams();

  const fillforms = async () => {
    await axios.post('http://localhost:8000/getformnames', { role: 'department' })
      .then(response => {
        const forms = response.data;
        let rows = [];
        forms.forEach(form => {
          rows.push({
            icon: <GrTableAdd className='text-center scale-150 w-full' />,
            fname: form.formname,
            action: <button onClick={() => navigate('/form', { state: { id: form._id, dept: dept } })} className='bg-blue-500 text-white font-semibold rounded-md p-1'>Fill Form</button>
          })
        })
        setTabledata({ ...tabledata, rows: rows });
        setTimeout(() => {
          setLoading(false)
  },2000)
  ref.current.scrollIntoView({ behavior: 'smooth' });

      })
      .catch(err => {
        console.log(err);
      });
  };

  const viewData = async () => {
    await axios.post('http://localhost:8000/getformnames', { role: 'department' })
      .then(response => {
        const forms = response.data;
        let rows = [];
        forms.forEach(form => {
          rows.push({
            icon: <GrTableAdd className='text-center scale-150 w-full' />,
            fname: form.formname,
            action: <button onClick={() => navigate(`/formdata/${form._id}`, { state: { formname: form.formname } })} className='bg-blue-500 text-white font-semibold rounded-md p-1'>View Data</button>
          })
        })
        setTabledata({ ...tabledata, rows: rows });
        setTimeout(() => {
          setLoading(false)
      },2000)
      ref.current.scrollIntoView({ behavior: 'smooth' });

      })
      .catch(err => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    if (path.indexOf('principal') === -1) {
      fillforms();
    } else {
      viewData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if(loading) <Loader />
  return (
    <div className='min-h-screen flex flex-col'>
      <NavbarComp />
      <div className='w-full h-full bg-slate-100 flex flex-col items-center'>
        <div className='p-4 my-4 w-full text-center text-2xl font-semibold'>
          Welcome to <span className='text-4xl font-bold'>{dept.toLocaleUpperCase()}</span> Department Dashboard
        </div>
        <div className='md:w-[85%] w-[99%] md:p-12 p-3 gap-x-4 gap-y-5 flex flex-wrap justify-center sm:justify-start '>
        {path.indexOf('principal') !== -1 ? null : (
            <div onClick={() => navigate(`/${dept}/dataauthentication`)} className='flex flex-col justify-center hover:drop-shadow-2xl hover:scale-110 hover:font-bold items-center'>
              <div className='md:w-[200px] md:h-[200px] w-[150px]  h-[150px] rounded-md'>
                <img src='/assets/task.png' className=' mix-blend-multiply' alt='Student'></img>
              </div>
              <p className='p-1 text-2xl font-semibold'>Your Tasks</p>
            </div>
          )}

          {path.indexOf('principal') !== -1 ? null : (
            <div onClick={fillforms} className='flex flex-col justify-center hover:drop-shadow-2xl hover:scale-110 hover:font-bold items-center'>
            <div className='md:w-[200px] md:h-[200px] w-[150px]  h-[150px] rounded-md'>
              <img src='/assets/fillforms.png' className=' mix-blend-multiply' alt='Student'></img>
            </div>
            <p className='p-1 text-2xl font-semibold'>Fill Forms</p>
          </div>
          )}

        <div onClick={viewData} className='flex flex-col justify-center hover:drop-shadow-2xl hover:scale-110 hover:font-bold items-center'>
          <div className='md:w-[200px] md:h-[200px] w-[150px]  h-[150px] rounded-md'>
            <img src='/assets/viewdata.png' className=' mix-blend-multiply' alt='Student'></img>
          </div>
          <p className='p-1 text-2xl font-semibold'>View Data</p>
        </div>
          
<div onClick={() => navigate(`/principal/departments/${dept}/students`)} className='flex flex-col justify-center hover:drop-shadow-2xl hover:scale-110 hover:font-bold items-center'>
  <div className='md:w-[200px] md:h-[200px] w-[150px]  h-[150px] rounded-md'>
    <img src='/assets/prinstudent.png' className=' mix-blend-multiply' alt='Student'></img>
  </div>
  <p className='p-1 text-2xl font-semibold'>Student</p>
</div>
<div onClick={() => navigate(`/principal/departments/${dept}/faculty`)} className='flex flex-col justify-center hover:drop-shadow-2xl hover:scale-110 hover:font-bold items-center'>
  <div className='md:w-[200px] md:h-[200px] w-[150px]  h-[150px] rounded-md'>
    <img src='/assets/printeacher.png' className=' mix-blend-multiply' alt='Student'></img>
  </div>
  <p className='p-1 text-2xl font-semibold'>Faculty</p>
</div>
{/* {path.includes('principal') && (
  <>
<div onClick={() => navigate('/principal/nss',{state:{role:'nss',fname:'National Service Scheme'}})} className='flex flex-col justify-center hover:drop-shadow-2xl hover:font-bold items-center'>
  <div className='md:w-[200px] flex justify-center items-center md:h-[200px] w-[150px]  h-[150px] rounded-md'>
    <img src='/assets/nss.png' className=' mix-blend-multiply scale-110 hover:scale-125' alt='Student'></img>
  </div>
  <p className='p-1 text-2xl font-semibold'>NSS</p>
</div>
<div onClick={() => navigate('/principal/iqac',{state:{role:'iqac',fname:'Internal Quality Assurance Cell'}})} className='flex flex-col justify-center hover:drop-shadow-2xl hover:scale-110 hover:font-bold items-center'>
  <div className='md:w-[200px] md:h-[200px] w-[150px]  h-[150px] rounded-md'>
    <img src='/assets/iqac.png' className=' mix-blend-multiply scale-[.75]' alt='Student'></img>
  </div>
  <p className='p-1 text-2xl font-semibold'>IQAC</p>
</div>
<div onClick={() => navigate('/principal/iic',{state:{role:'iic',fname:"Institution's Innovative Council"}})} className='flex flex-col justify-center hover:drop-shadow-2xl hover:scale-110 hover:font-bold items-center'>
  <div className='md:w-[200px] md:h-[200px] w-[150px]  h-[150px] rounded-md'>
    <img src='/assets/iic.png' className=' mix-blend-multiply scale-[.75]' alt='Student'></img>
  </div>
  <p className='p-1 text-2xl font-semibold'>IIC</p>
</div>
<div onClick={() => navigate('/principal/tnp',{state:{role:'tnp',fname:'Training and Placement Cell'}})} className='flex flex-col justify-center hover:drop-shadow-2xl hover:scale-110 hover:font-bold items-center'>
  <div className='md:w-[200px] md:h-[200px] w-[150px]  h-[150px] rounded-md'>
    <img src='/assets/tnp.png' className=' mix-blend-multiply scale-[.75]' alt='Student'></img>
  </div>
  <p className='p-1 text-2xl font-semibold'>TNP</p>
</div>

</>)} */} 

        </div>
        <div className='flex flex-col md:w-[85%] w-[99%]'>
          <div className='p-5 flex justify-start items-center'>
            <p className='font-semibold text-3xl uppercase'>Department Data</p>
          </div>
          <div className='md:p-12 p-3 gap-x-20 gap-y-10 flex flex-wrap justify-center' ref={ref} id='table'>
            <div className='md:w-[80%] font-semibold'>
              <MDBDataTable
                hover
                striped
                entriesOptions={[10, 25, 50, 100]}
                entries={10}
                bordered
                paging={true}
                data={tabledata}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinDeptDashboard;
