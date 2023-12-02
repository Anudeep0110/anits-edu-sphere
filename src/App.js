import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeComp from './Components/HomeComp';
import AnimCursor from './Components/AnimCursor';
import Sforgot from './StudentComponents/Sforgot';
import Sreset from './StudentComponents/Sreset';
import { Login } from './Components/Login';
import FormComp from './Components/FormComp';
import Dashboard from './Components/Dashboard';
import Formbook from './FacultyComponents/Formbook';


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

        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
