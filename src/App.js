import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import HomeComp from './Components/HomeComp';
import AnimCursor from './Components/AnimCursor';
import Sforgot from './StudentComponents/Sforgot';
import Sreset from './StudentComponents/Sreset';
import { Login } from './Components/Login';
import FormComp from './Components/FormComp';
import Dashboard from './Components/Dashboard';
import Formbook from './FacultyComponents/Formbook';
import Principal from './Components/Principal';
import PrinDepartment from './Components/PrinDepartment';
import PrinDeptDashboard from './Components/PrinDeptDashboard';
import PrinStudents from './Components/PrinStudents';
import PrinFaculty from './Components/PrinFaculty';
import StudentDashboard from './Components/StudentDashboard';
import FormData from './Components/FormData';
import Tnp from './Components/Tnp';


function App() {
  return (
    <>
    <AnimCursor/>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComp />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/sforgot' element={<Sforgot />}></Route>
          <Route path='/sreset/:encryptedText' element={<Sreset />}></Route> 
          <Route path='/login' element={<Login />}></Route> 
          <Route path='/form' element={<FormComp />}></Route> 
          <Route path='/fpublications' element={<Formbook />}></Route>
          <Route path='/principal' element={<Principal />}></Route>
          <Route path='/principal/departments' element={<PrinDepartment />}></Route>
          <Route path='/principal/departments/:dept' element={<PrinDeptDashboard />}></Route>
          <Route path='/student/:id' element={<StudentDashboard />}></Route>
          <Route path='/faculty/:id' element={<PrinDeptDashboard />}></Route>
          <Route path='/formdata/:id' element={<FormData />}></Route>
          <Route path='/principal/departments/:dept/students' element={<PrinStudents />}></Route>
          <Route path='/principal/departments/:dept/faculty' element={<PrinFaculty />}></Route>

        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
