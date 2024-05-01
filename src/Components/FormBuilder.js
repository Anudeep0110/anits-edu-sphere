/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import NavbarComp from './NavbarComp'
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import { useNavigate} from 'react-router-dom';
import Loader from './Loader';

const CreateForm = () => {

    const [tabledata, setTabledata] = React.useState({
        columns: [
          {
            label: 'S.No.',
            field: 'sno',
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
            label: 'Role',
            field: 'role',
            sort: 'asc',
            width: 250,
            searchable: true
          },
          {
            label: 'View',
            field: 'view',
            sort: 'asc',
            width: 250,
            searchable: true
          },
        ],
        rows: []
      });

  const [loading, setLoading] = React.useState(true);
    
  const navigate = useNavigate()

  React.useEffect(() => {
      if(atob(localStorage.getItem('role')) !== 'admin') navigate('/')
      else setLoading(false)
  },[])

    React.useEffect(() => {
        axios.get('http://localhost:8000/getforms')
        .then(response => {
            const forms = response.data;
            let rows = [];
            forms.forEach((form, index) => {
                rows.push({
                    sno: index + 1,
                    fname: form.formname,
                    role: form.role,
                    view: <button onClick={() => navigate(`/viewform/${form._id}`)} className='bg-black text-white px-3 font-semibold rounded-md p-1'>View</button>
                })
            })
            setTabledata({...tabledata, rows: rows});
            setTimeout(() => {
              setLoading(false)
            },2000)
        })
        .catch(err => {
            console.log(err);
        })
    },[])

  if(loading) return <Loader />

  return (
    <div className=' bg-slate-100 min-h-screen'>
        <NavbarComp />
        <div className='flex w-full flex-col px-20 py-20'>
            <div className='flex justify-between px-12 py-16'>
                <h1 className='text-4xl font-semibold'>Craft your Forms Here.</h1>
                <button onClick={() => navigate('/createform',{state:{role:"admin"}})} className='px-10 py-1 rounded rouned-sm text-lg font-semibold bg-black text-white'>Create</button>
            </div>
            <Table data={tabledata} />
        </div>
    </div>
  )
}

export default CreateForm



const Table = ({data}) => {
    return (
        <div className='md:p-12 p-3 gap-x-20 gap-y-10  flex flex-wrap justify-center'>
            <div className='md:w-[97%] font-semibold'>
                <MDBDataTable
                    hover
                    striped
                    entriesOptions={[10, 25, 50, 100]}
                    entries={25}
                    bordered

                    className='cursor-pointer text-black uppercase font-semibold'
                    paging={true}
                    data={data}
                ></MDBDataTable>
            </div>
        </div>
    )

}