import React from 'react';
import NavbarComp from './NavbarComp';
import { MDBDataTable } from 'mdbreact';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const DeptAppr = () => {
    const navigate = useNavigate();
    const { dept } = useParams();
    const location = useLocation();
    const path = location.pathname.split('/');

    const handleReviewData = (role) => {
        // Navigate to the appropriate page based on the role and path
        if (path.includes('principal')) {
            navigate(`/principal/${dept}/details/${role}`);
        } else {
            navigate(`/${dept}/formforapproval/${role}`);
        }
    };

    const buttonLabel = path.includes('principal') ? 'View Form Data' : 'Data to be reviewed';

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
                    <button className='py-1 w-auto px-2 bg-blue-500 text-white rounded-md text-lg font-semibold border' onClick={() => handleReviewData('Faculty')}>{buttonLabel}</button>
                )
            },
            {
                role: 'Student',
                action: (
                    <button className='py-1 w-auto px-2 bg-blue-500 text-white rounded-md text-lg font-semibold border' onClick={() => handleReviewData('Student')}>{buttonLabel}</button>
                )
            }
        ]
    };

    return (
        <div className='h-screen bg-slate-100'>
            <NavbarComp />
            <div className='w-full flex justify-center items-center font-semibold text-3xl'>
                <p>Faculty / Student Details</p>
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

export default DeptAppr;
