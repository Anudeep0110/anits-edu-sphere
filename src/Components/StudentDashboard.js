// import React from 'react'
// import NavbarComp from './NavbarComp'
// import { useParams } from 'react-router-dom'
// import { Sidebar,Menu,MenuItem,SubMenu } from 'react-pro-sidebar'
// import { MdDashboard } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
// import { BsDatabaseCheck } from "react-icons/bs";


// const StudentDashboard = () => {

//     const {id} = useParams()

//   return (
//     <div className='h-screen bg-slate-100'>
//         <NavbarComp />
//         <div className='h-full '>
//             <Sidebar backgroundColor='rgb(241,245,249)'
//                 rootStyles={{
//                     marginTop:"4rem",
//                 }}
//             >
//                 <Menu menuItemStyles={{

//                     root:{
//                         color:"black",
//                     },
                    
//                 }}>
//                     <MenuItem disabled style={{
//                         height:"200px",
//                     }}>
//                         <div className='h-[200px] border border-black flex justify-center items-center'>
//                             <div className='w-[50px] h-[50px] bg-black'>

//                             </div>
//                         </div>
//                     </MenuItem>
//                     <MenuItem icon={<MdDashboard />}>Dashboard</MenuItem>
//                     <MenuItem icon = {<CgProfile />}>Profile</MenuItem>
//                     <MenuItem icon = {<BsDatabaseCheck />}>Forms</MenuItem>
//                     <MenuItem>Publications</MenuItem>
//                     <MenuItem>Attendance</MenuItem>
//                 </Menu>
//             </Sidebar>
//         </div>
//     </div>
//   )
// }

// export default StudentDashboard