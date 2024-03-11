import React from 'react';
import NavbarComp from './NavbarComp';
import { MDBDataTable } from 'mdbreact';
import { useLocation, useNavigate, useParams } from 'react-router-dom';


const PrinFaculty = () => {


    const tableRef = React.createRef();
    const location = useLocation();
    const navigate = useNavigate()
    const {dept} = useParams()

    const data = {
        columns: [
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Faculty ID',
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
        rows: [
          {
              name: 'Tiger Nixon',
              regno: 'Tiger Nixon',
              yearofstudy: 'System Architect',
              action: <button className='py-1 w-auto px-2 bg-blue-500 text-white rounded-md text-lg font-semibold border' onClick={() => navigate('/faculty/1')}>View Profile</button>,
            },
            {
              name: 'Garrett Winters',
              regno: 'Accountant',
              yearofstudy: 'System Architect',
              action: <button className='py-1 w-auto px-2 bg-blue-500 text-white rounded-md text-lg font-semibold border' onClick={() => navigate('/faculty/2')}>View Profile</button>,
            },
        ]
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

export default PrinFaculty;
