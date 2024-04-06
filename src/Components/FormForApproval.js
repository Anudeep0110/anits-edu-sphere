import React, { useState, useEffect } from 'react';
import NavbarComp from './NavbarComp';
import { useParams } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GrTableAdd } from 'react-icons/gr';

const FormForApproval = () => {
    const navigate = useNavigate();
    const {role} = useParams()

    const [tabledata, setTabledata] = useState({
        columns: [
            {
                label: 'Form Name',
                field: 'fname',
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
        rows: []
    });

    useEffect(() => {
        const fetchFormNames = async () => {
            try {
                const response = await axios.post('http://localhost:8000/getformnames', { role: role.toLowerCase() });
                const forms = response.data;
                let rows = [];
                forms.forEach(form => {
                    rows.push({
                        icon: <GrTableAdd className='text-center scale-150 w-full' />,
                        fname: form.formname,
                        action: <button onClick={() => navigate(`/department/approvals/${form._id}`, { state: { formname: form.formname } })} className='bg-blue-500 text-white font-semibold rounded-md p-1'>Approve Data</button>
                    });
                });
                setTabledata({ ...tabledata, rows: rows });
            } catch (error) {
                console.error('Error fetching form names:', error);
            }
        };

        fetchFormNames();
    }, [navigate, tabledata]);

    return (
        <div className='h-screen bg-slate-100'>
            <NavbarComp />
            <div className='w-full flex justify-center items-center font-semibold text-3xl'>
                <p>Forms for Approval</p>
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
                        data={tabledata}
                    />
                </div>
            </div>
        </div>
    );
};

export default FormForApproval;
