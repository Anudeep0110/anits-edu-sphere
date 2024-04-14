/* eslint-disable array-callback-return */
import React from 'react';
import NavbarComp from './NavbarComp';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';


const PrinStudents = () => {


    const tableRef = React.createRef();
    const location = useLocation();
    const navigate = useNavigate()
    const {dept} = useParams()


    const [students, setStudents] = React.useState([])

    React.useEffect(() => {
        const date = new Date()
        axios.post('http://localhost:8000/getstudents', { dept: dept })
            .then(res => {
                let slist = []
                res.data.map((student,index) => {
                    slist.push({
                        name: student.first_name + ' ' + student.last_name,
                        regno: student.regno,
                        yearofstudy: date.getFullYear() - student.from_year,
                        action: <button className='py-1 w-auto px-2 bg-blue-500 text-white rounded-md text-lg font-semibold border' onClick={() => navigate(`/student/${student.regno}`)}>View Profile</button>
                    })
                })
                setStudents(slist)

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
