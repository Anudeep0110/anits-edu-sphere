import React from 'react';
import NavbarComp from './NavbarComp';
import { MDBDataTable } from 'mdbreact';
import { useNavigate, useParams } from 'react-router-dom';

const Facultystudentapproval = () => {
    const navigate = useNavigate();
    const{dept}=useParams();

    const handleReviewData = (role) => {
        // Navigate to the review data page for the selected role
        navigate(`/${dept}/formforapproval/${role}`);
    };

    const data = {
        columns: [
            {
                label: 'Role',
                field: 'role',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 250
            }
        ],
        rows: [
            {
                role: 'Faculty',
                action: (
                    <button className='py-1 w-auto px-2 bg-blue-500 text-white rounded-md text-lg font-semibold border' onClick={() => handleReviewData('Faculty')}>Data to be reviewed</button>
                )
            },
            {
                role: 'Student',
                action: (
                    <button className='py-1 w-auto px-2 bg-blue-500 text-white rounded-md text-lg font-semibold border' onClick={() => handleReviewData('Student')}>Data to be reviewed</button>
                )
            }
        ]
    };

    return (
        <div className='h-screen bg-slate-100'>
            <NavbarComp />
            <div className='w-full flex justify-center items-center font-semibold text-3xl'>
                <p>Roles </p>
            </div>
            <div className='w-full flex justify-center'>
                <div className='md:w-[80%]'>
                    <MDBDataTable
                        hover
                        striped
                        entriesOptions={[10, 25, 50, 100]}
                        entries={10}
                        bordered
                        paging={true}
                        data={data}
                    />
                </div>
            </div>
        </div>
    );
};

export default Facultystudentapproval;
