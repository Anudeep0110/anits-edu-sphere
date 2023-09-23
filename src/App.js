// import logo from './logo.svg';
import './App.css';
import './FacultyComponents/fapp.css'
import './StudentComponents/sapp.css'
import './DepartmentComponents/dapp.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeComp from './Components/HomeComp';
import LoginPage from './DepartmentComponents/Dlogin';
import FLogin from './FacultyComponents/Flogin';
import SLogin from './StudentComponents/Slogin';
import AnimCursor from './Components/AnimCursor';
import PLogin from './PrincipalComponents/PLogin'
import Sdash from './StudentComponents/Sdash';
import Sforgot from './StudentComponents/Sforgot';
import Sreset from './StudentComponents/Sreset';
import { Login } from './Components/Login';



function App() {
  return (
    <>
    <AnimCursor/>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComp />}></Route>
          <Route path='/flogin' element={<FLogin />}></Route>
          <Route path='/dlogin' element={<LoginPage />}></Route>
          <Route path='/slogin' element={<SLogin />}></Route>
          <Route path='/plogin' element={<PLogin />}></Route>
          <Route path='/sdash' element={<Sdash />}></Route>
          <Route path='/sforgot' element={<Sforgot />}></Route>
          <Route path='/sreset/:uname' element={<Sreset />}></Route> 
          <Route path='/login' element={<Login />}></Route> 
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
