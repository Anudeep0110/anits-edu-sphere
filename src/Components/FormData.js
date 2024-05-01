/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import NavbarComp from './NavbarComp'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import Loader from './Loader';
import { toast, ToastContainer } from 'react-toastify';




const FormData = () => {

    const location = useLocation();
    const {id} = useParams()

    const [col, setColumns] = React.useState([]);
    const [data, setRows] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [editId,setEditId] = React.useState('');
    const [payload,setPayload] = React.useState({});
    const [iscustom,setIsCustom] = React.useState(0)

    const edit = (key) => {
        let payload = {}
        col.forEach(col => {
            payload[col.field] = data.filter(row => row._id === key)[0][col.field];
        });
        setPayload(payload);
        setEditId(key);
        setOpen(true);
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open)
    }



    React.useEffect(() => {
        const fetchData = async () => {
            let cus = 0;
            try {
                const colResponse = await axios.post('http://localhost:8000/getcolnames', { id: id });
                setTimeout(() => {
                    setLoading(false)
            },2000)
            cus = colResponse.data?.iscustom
            console.log(colResponse.data?.iscustom);
            console.log(cus);
            await setIsCustom(prev => colResponse.data?.iscustom)
                const newColumns = colResponse.data.columns.map(col => ({
                    label: col.colname,
                    field: col.name,
                    sort: 'asc',
                    width: 200
                }));
                if(atob(localStorage.getItem('role')) !== 'student' && atob(localStorage.getItem('role')) !== 'faculty'){
                newColumns.push({
                    label: 'Edit',
                    field: 'action1',
                    sort: 'asc',
                    width: 200
                })
            }

                const studentId = location.state.studentId;
                const employee_id = location.state.employee_id;
                const dept = location.state.dept;
                setColumns(newColumns);
            
                const rowResponse = await axios.post('http://localhost:8000/getformdata', { id: id, studentId: studentId, employee_id: employee_id,dept:dept,iscustom:cus});
                console.log(rowResponse);
                const newData = rowResponse.data.map(approval => {
                    // If studentId or employee_id is present, include the approval status in the row data
                    const rowData = {
                        ...approval,
                    };
                    return rowData;
                });
                setRows(newData);
            } catch (error) {
                console.log(error);
            }
        }            ;
        fetchData();
    }, [id]);

    if(loading) <Loader />
    
    const formname = location.state.formname;  
  return (
    <>
    <ToastContainer />
    <div className={`min-h-screen bg-slate-100`} aria-disabled>
        <Modal open={open} payload = {payload} formId = {id} id={editId} cols = {col.filter(col => col.field !== 'action1')} data = {data} handleOpen={handleOpen} />
        <NavbarComp />
        <div className='h-full flex flex-col w-full justify-center items-center '>
            <div className='md:w-[80%] w-[95%] p-10'>
                <p className='font-semibold text-3xl text-center'>{formname}</p>
            </div>
            <div className='md:w-[95%]  w-[99%] md:px-5 px-1'>
            <div  className='w-full font-semibold overflow-x-scroll'>
          <MDBDataTable
            hover
            striped
            key={data._id}
            large
            entriesOptions={[10, 25, 50, 100]}
            entries={10}
            bordered
            paging={true}
            data={{
                columns : col,
                rows:data.map((row) => ({
                    ...row,
                    'action1': (atob(localStorage.getItem('role')) === 'student' || atob(localStorage.getItem('role')) === 'faculty') ? null : (
                        <button onClick={(e) => edit(row._id)} className='bg-green-500 text-white p-2 w-[100px] rounded-md'>Edit</button>
                    )
                }))
            }}
          >

          </MDBDataTable>
        </div>
            </div>
        </div>
    </div>
    </>
  )
}


export default FormData


const Modal = ({open,handleOpen,formId,payload,id,cols,data}) => {

    const modalRef = React.useRef();
    const [dataTo,setData] = React.useState({});

    React.useEffect(() => {
        const checkIfClickedOutside = e => {
            if (open && modalRef.current && !modalRef.current.contains(e.target)) {
                handleOpen();
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [open, modalRef]);


    React.useEffect(() => {
        data = data.filter(row => row._id === id)
        setData(payload)  
    }
    ,[id,cols,payload])

    const handleChange = (e) => {
        setData({
            ...dataTo,
            [e.target.name]: e.target.value
        })
    }

    const update = () => {
        axios.post('http://localhost:8000/updateformdata',{id:formId,docId:id,data:dataTo})
        .then(res => {
            handleOpen();
            toast.success('Data Saved successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                window.location.reload();
            },2000)
        })
        .catch(err => {
            toast.error('Data not saved! Please Try Again Later!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                window.location.reload();
            },2000)
        })
    }


    return (
        <>
            {open && 
                <div className='fixed top-0 left-0 z-10 min-h-full flex justify-center w-full bg-[rgba(0,0,0,.6)]'>
                    <div ref={modalRef} className='mx-auto w-[700px] my-20 flex flex-col gap-4 py-10 overflow-auto px-20 h-[800px] bg-slate-100 border-black border transition-all'>
                        <p className='uppercase text-3xl font-bold text-center'>EDIT THE DATA</p>
                        {cols.map((col,index) => {
                            return (
                                <div key={index} className='flex flex-col gap-2'>
                                    <label className='uppercase text-xl font-semibold'>{col.label}</label>
                                    <input name={col.field} onChange={handleChange} className='px-2 py-2 border' type='text' defaultValue={data[0][col.field]} />
                                </div>
                            )
                        })}
                        <button onClick={update} className='bg-slate-900 text-white uppercase font-semibold py-2'>Update</button>
                    </div>
                </div>
            }
        </>
    )
}