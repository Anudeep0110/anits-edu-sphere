import React, { useState, useEffect } from 'react';
import NavbarComp from './NavbarComp';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

const ApprovalData = () => {
    const location = useLocation();
    const { id ,dept} = useParams();

    const [col, setColumns] = useState([]);
    const [data, setRows] = useState([]);

    // Define the fetchData function
    const fetchData = async () => {
        try {
            const colResponse = await axios.post('http://localhost:8000/getcolnames', { id: id });
            const newColumns = colResponse.data.columns.map(col => ({
                label: col.colname,
                field: col.name,
                sort: 'asc',
                width: 200
            }));
            setColumns(newColumns);

            const approvalResponse = await axios.post('http://localhost:8000/getapprovals', { formid: id ,dept:dept});
            const newData = approvalResponse.data.map(approval => ({
                ...approval.data, 
                action: (
                    <div>
                        <button className='bg-green-500 text-white font-semibold rounded-md p-1' onClick={() => handleApprove(approval._id)}>Approve</button>
                        <button className='bg-red-500 text-white font-semibold rounded-md p-1' onClick={() => handleReject(approval._id)}>Reject</button>
                    </div>
                ),
            }));
            setRows(newData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData(); // Call the fetchData function
    }, [id]);

    const formname = location.state.formname;

    const handleApprove = async (id) => {
        try {
            await axios.post('http://localhost:8000/approve', { id, status: 'accepted' });
            fetchData(); // Fetch updated data after approval
        } catch (error) {
            console.error('Error approving:', error);
        }
    };
    
    const handleReject = async (id) => {
        try {
            await axios.post('http://localhost:8000/approve', { id, status: 'rejected' });
            fetchData(); // Fetch updated data after rejection
        } catch (error) {
            console.error('Error rejecting:', error);
        }
    };

    return (
        <div className='min-h-screen bg-slate-100'>
            <NavbarComp />
            <div className='h-full flex flex-col justify-center items-center '>
                <div className='md:w-[80%] w-[95%] p-10'>
                    <p className='font-semibold text-3xl text-center'>{formname}</p>
                </div>
                <div className='md:w-[85%] w-[99%] md:px-5 px-1'>
                    <div className='w-full font-semibold overflow-x-scroll'>
                        <MDBDataTable
                            hover
                            striped
                            large
                            entriesOptions={[10, 25, 50, 100]}
                            entries={10}
                            bordered
                            paging={true}
                            data={{ columns: [...col, { label: 'Action', field: 'action' }], rows: data }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalData;
