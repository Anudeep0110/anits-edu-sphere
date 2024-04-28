/* eslint-disable array-callback-return */
import React from 'react';
import NavbarComp from './NavbarComp';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Loader from './Loader';


const PrinStudents = () => {


    const tableRef = React.createRef();
    const location = useLocation();
    const navigate = useNavigate()
    const {dept} = useParams()

    const [loading, setLoading] = React.useState(true)



    const [students, setStudents] = React.useState([])

    React.useEffect(() => {
        // const date = new Date()
        axios.post('http://localhost:8000/getfaculty', { dept: dept })
            .then(res => {
                let slist = []
                res.data.map((faculty,index) => {
                    slist.push({
                        name: faculty.first_name + ' ' + faculty.last_name,
                        employee_id: faculty.employee_id,
                        designation: faculty.designation,
                        action: <button className='py-1 w-auto px-2 bg-blue-500 text-white rounded-md text-lg font-semibold border' onClick={() => navigate(`/principal/view/faculty/${faculty.employee_id}`)}>View Profile</button>
                    })
                })
                setStudents(slist)
                setTimeout(() => {
                  setLoading(false)
          },2000)

            });
    },[dept, navigate])

    const data = {
        columns: [
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Roll Number',
            field: 'regno',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Year of Study',
            field: 'yearofstudy',
            sort: 'asc',
            width: 250,
            searchable: true
          },
          {
              label: 'Action',
              field: 'action',
              sort: 'asc',
              width: 250,
          }
        ],
        rows: students
      };

    const path = location.pathname.split('/');
    const role = path[path.length - 1].charAt(0).toUpperCase() + path[path.length - 1].slice(1);
    if(loading) <Loader />
  return (
    <div className='h-screen bg-slate-100'>
      <NavbarComp />
        <div className='w-full flex justify-center items-center font-semibold text-3xl'>
            <p>{role} of {dept.toLocaleUpperCase()} </p>
        </div>
      <div className='w-full flex justify-center'>
        <div className='md:w-[80%]'>
          <MDBDataTable
          ref={tableRef}
            hover
            striped
            entriesOptions={[10, 25, 50, 100]}
            entries={10}
            bordered
            paging={true}
            data={data}
          >

          </MDBDataTable>
        </div>
      </div>
    </div>
  );
};

export default PrinStudents;
