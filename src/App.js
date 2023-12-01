import './App.css';
import './FacultyComponents/fapp.css'
import './StudentComponents/sapp.css'
import './DepartmentComponents/dapp.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeComp from './Components/HomeComp';
import AnimCursor from './Components/AnimCursor';
import Sdash from './StudentComponents/Sdash';
import Sforgot from './StudentComponents/Sforgot';
import Sreset from './StudentComponents/Sreset';
import { Login } from './Components/Login';
import Fdash from './FacultyComponents/Fdash';
import Pdash from './PrincipalComponents/Pdash';
import Ddash from './DepartmentComponents/Ddash';
import FormComp from './Components/FormComp';
import Formbook from './FacultyComponents/Formbook';


function App() {
  return (
    <>
    <AnimCursor/>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeComp />}></Route>
          <Route path='/sdash' element={<Sdash />}></Route>
          <Route path='/fdash' element={<Fdash />}></Route>
          <Route path='/pdash' element={<Pdash />}></Route>
          <Route path='/ddash' element={<Ddash />}></Route>
          <Route path='/sforgot' element={<Sforgot />}></Route>
          <Route path='/sreset/:encryptedText' element={<Sreset />}></Route> 
          <Route path='/login' element={<Login />}></Route> 
          <Route path='/form' element={<FormComp />}></Route> 
          <Route path='/fpublications' element={<Formbook />}></Route> 

        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
