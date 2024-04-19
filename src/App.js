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
import NSSDashBoard from './Components/NSSDashBoard';
import IICDashBoard from './Components/IICDashBoard';
import IQACDashBoard from './Components/IQACDashBoard';
import TnpDashboard from './Components/TnpDashboard';
import FacultyDashboard from './Components/FacultyDashboard';
import GlobalSearch from './Components/GlobalSearch';
import ApprovalData from './Components/ApprovalsDashboard';
import FormForApproval from './Components/FormForApproval';
import DeptAppr from './Components/DeptAppr';
import Admin from './Components/Admin';
import ImportStudents from './Components/ImportStudents';
import ImportFaculty from './Components/ImportFaculty';
import CreateForm from './Components/CreateForm';
import FormBuilder from './Components/FormBuilder';
import AdminViewForm from './Components/AdminViewForm';




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
          <Route path='/faculty/:id' element={<FacultyDashboard />}></Route>
          <Route path='/formdata/:id' element={<FormData />}></Route>
          <Route path='/principal/departments/:dept/students' element={<PrinStudents />}></Route>
          <Route path='/principal/departments/:dept/faculty' element={<PrinFaculty />}></Route>
          <Route path='/principal/tnp' element={<TnpDashboard />}></Route>
          <Route path='/principal/iic' element={<IICDashBoard />}></Route>
          <Route path='/principal/iqac' element={<IQACDashBoard />}></Route>
          <Route path='/principal/nss' element={<NSSDashBoard />}></Route>
          <Route path='/nss' element={<NSSDashBoard />}></Route>
          <Route path='/iic' element={<IICDashBoard />}></Route>
          <Route path='/iqac' element={<IQACDashBoard />}></Route>
          <Route path='/department/:dept' element={<PrinDeptDashboard />}></Route>
          <Route path='/search' element={<GlobalSearch />}></Route>
          <Route path='/:dept/approvals/:id' element={<ApprovalData />}></Route>
          <Route path='/:dept/dataauthentication' element={<DeptAppr />}></Route>
          <Route path='/:dept/formforapproval/:role' element={<FormForApproval />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/import/students' element={<ImportStudents />}></Route>
          <Route path='/import/faculty' element={<ImportFaculty />}></Route>
          <Route path='/formbuilder' element={<FormBuilder />}></Route>
          <Route path='/createform' element={<CreateForm />}></Route>
          <Route path='/viewform/:id' element={<AdminViewForm />}></Route>
          <Route path='/principal/faculty/:id' element={<FacultyDashboard />}></Route>
          <Route path='/principal/student/:id' element={<StudentDashboard />}></Route>
          <Route path='/principal/departmentinfo/:dept' element={<DeptAppr />}></Route>
          <Route path='/principal/:dept/details/:role' element={<FormForApproval />}></Route>
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;