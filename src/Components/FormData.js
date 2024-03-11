import React from 'react'
import NavbarComp from './NavbarComp'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

const FormData = () => {

    const location = useLocation();
    const {id} = useParams()

    const [col, setColumns] = React.useState([]);
    const [data, setRows] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const colResponse = await axios.post('http://localhost:8000/getcolnames', { id: id });
                const newColumns = colResponse.data.columns.map(col => ({
                    label: col.colname,
                    field: col.name,
                    sort: 'asc',
                    with:200
                }));
                setColumns(newColumns);

                const rowResponse = await axios.post('http://localhost:8000/getformdata', { id: id });
                setRows(rowResponse.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]);
    const formname = location.state.formname;  
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
            data={{columns : col,rows:data}}
          >

          </MDBDataTable>
        </div>
            </div>
        </div>
    </div>
  )
}

export default FormData