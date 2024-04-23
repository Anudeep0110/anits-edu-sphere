/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import NavbarComp from './NavbarComp'
import { Sidebar,Menu,MenuItem } from 'react-pro-sidebar'
import { CgProfile } from "react-icons/cg";
import { BsDatabaseCheck } from "react-icons/bs";
import { MDBDataTable } from 'mdbreact';
import { GrTableAdd } from "react-icons/gr";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';

const ProfileContent = () => {

    const fname = 'Training and Placement Cell'

    return(
        <>
        <div className='flex flex-col overscroll-y-auto w-full'>
            <div className='flex flex-col w-full '>
                <h3 className='px-20 py-5 underline'>BioGraphy</h3>
                <div className='grid px-20 gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    <div className='flex flex-col'>
                        <p className='font-bold text-xl'>Firstname</p>
                        <p className='font-semibold text-lg'>{fname}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-xl'>LastName</p>
                        <p className='font-semibold text-lg'>{fname}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-xl'>Firstname</p>
                        <p className='font-semibold text-lg'>{fname}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-xl'>Firstname</p>
                        <p className='font-semibold text-lg'>{fname}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-xl'>Firstname</p>
                        <p className='font-semibold text-lg'>{fname}</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-full '>
                <h3 className='px-20 py-5 underline'>BioGraphy</h3>
                <div className='grid px-20 gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    <div className='flex flex-col'>
                        <p className='font-bold text-xl'>Firstname</p>
                        <p className='font-semibold text-lg'>{fname}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-xl'>Firstname</p>
                        <p className='font-semibold text-lg'>{fname}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-xl'>Firstname</p>
                        <p className='font-semibold text-lg'>{fname}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-xl'>Firstname</p>
                        <p className='font-semibold text-lg'>{fname}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-xl'>Firstname</p>
                        <p className='font-semibold text-lg'>{fname}</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-full '>
                <h3 className='px-20 py-5 underline'>BioGraphy</h3>
                <div className='grid px-20 gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    <div className='flex flex-col'>
                        <p className='font-bold text-xl'>Firstname</p>
                        <p className='font-semibold text-lg'>{fname}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-xl'>Firstname</p>
                        <p className='font-semibold text-lg'>{fname}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-xl'>Firstname</p>
                        <p className='font-semibold text-lg'>{fname}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-xl'>Firstname</p>
                        <p className='font-semibold text-lg'>{fname}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-xl'>Firstname</p>
                        <p className='font-semibold text-lg'>{fname}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

const FormsContent = ({tabledata}) => {
    console.log(tabledata)
    return(
        <>
        <div className='md:w-[80%] font-semibold'>
                <MDBDataTable
                    hover
                    striped
                    entriesOptions={[10, 25, 50, 100]}
                    entries={10}
                    bordered
                    paging={true}
                    data={tabledata}
                >

                </MDBDataTable>
        </div>
    </>
    )
};


const TnpDashboard = () => {
    const location = useLocation();

    const path = location.pathname.split('/'); 

    const [loading, setLoading] = React.useState(true);
    
    const navigate = useNavigate()

    React.useEffect(() => {
        if(atob(localStorage.getItem('role')) !== 'tnp' && location.pathname.split('/').indexOf('principal') === -1) navigate('/')
        else setLoading(false)
    },[])

    console.log(location.pathname.split('/').indexOf('principal'));
    console.log(atob(localStorage.getItem('role')));

    const [selectedMenuItem, setSelectedMenuItem] = React.useState('profile');

    const [tabledata, setTabledata] = React.useState({
        columns: [
          {
            label: 'Icon',
            field: 'icon',
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
            label: 'Action',
            field: 'action',
            sort: 'asc',
            width: 250,
            searchable: true
          },
        ],
        rows: []
    });

    if(loading) return <Loader />

      const getforms = async () => {
        axios.post('http://localhost:8000/getformnames',{role:'tnp'})
        .then(response => {
        const forms = response.data;
        let rows = [];
        forms.forEach(form => {
            rows.push({
            icon: <GrTableAdd className='text-center scale-150 w-full'/>,
            fname: form.formname,
            action: <button onClick={() => navigate('/form', { state: { id: form._id, formname:form.formname } })} className='bg-blue-500 text-white font-semibold rounded-md p-1'>Fill Form</button>
            
            })
        })
        setTabledata({...tabledata, rows: rows}); 
        console.log(tabledata);
      })
    }


    const viewforms = async () => {
        axios.post('http://localhost:8000/getformnames',{role:'tnp'})
        .then(response => {
        const forms = response.data;
        let rows = [];
        forms.forEach(form => {
            rows.push({
            icon: <GrTableAdd className='text-center scale-150 w-full'/>,
            fname: form.formname,
            action: <button onClick={() => navigate(`/formdata/${form._id}`,{state:{formname:form.formname}})} className='bg-blue-500 text-white font-semibold rounded-md p-1'>View Data</button>
            
            })
        })
        setTabledata({...tabledata, rows: rows}); 
        console.log(tabledata);
      })
    }

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

    const renderContent = () => {
        switch (selectedMenuItem) {
            case 'profile':
                return (
                    <div className='flex py-10 '>
                        <ProfileContent />
                    </div>  
                )
            case 'forms':
                return( 
                    <div className='flex justify-center py-20'>
                        <FormsContent tabledata={tabledata}/>
                    </div>
                )
            // Add cases for other menu items as needed
            default:
                return null;
        }
    };

  return (
    <div className='min-h-screen bg-slate-100 flex'>
        <div className='min-h-screen flex flex-col border border-black'>
            <Sidebar backgroundColor='rgb(241,245,249)'
                breakPoint='md'
                rootStyles={{
                    marginTop:"2rem",
                }}
            >
                <Menu menuItemStyles={{

                    root:{
                        color:"black",
                    },
                    
                }}>
                    <MenuItem disabled style={{
                        height:"200px",
                    }}>
                        <div className='h-[200px] flex justify-center items-center'>
                            <div className='w-[100px] h-[100px] '>
                                <img alt='Profile' src='/assets/profile.png'></img>
                                <p className='flex justify-center text-blue-950'>Anudeep Gude</p>
                            </div>
                        </div>

                        {/* <div className='h-[200px] flex justify-center  items-center'>
                            <div className='h-[150px]  flex flex-col items-center justify-center'>
                            </div>
                        </div> */}
                    </MenuItem>
                    <MenuItem icon = {<CgProfile />}  onClick={() => handleMenuItemClick('profile')} isActive={selectedMenuItem === 'profile'}>Profile</MenuItem>
                              
          {path.indexOf('principal') === -1 ?
            <div>
            <MenuItem icon = {<BsDatabaseCheck />} onClick={() => {
                        handleMenuItemClick('forms');
                        getforms();
                    }}                     
                    isActive={selectedMenuItem === 'forms'}>Forms</MenuItem>
          </div>:
          <></>
          }                    
                    <MenuItem icon = {<BsDatabaseCheck />} onClick={() => {
                        handleMenuItemClick('forms'); 
                        viewforms();
                    }}
                    isActive={selectedMenuItem === 'forms'}> View Forms</MenuItem>



                    {/* <MenuItem>Qualification</MenuItem>
                    <MenuItem>Experience</MenuItem>
                    <MenuItem>Time Table</MenuItem> */}
                    
                </Menu>

            </Sidebar>
        </div>
        <div className='flex w-full flex-col'>
            <NavbarComp />
                {renderContent()}
        </div>
    </div>
  )
}

export default TnpDashboard