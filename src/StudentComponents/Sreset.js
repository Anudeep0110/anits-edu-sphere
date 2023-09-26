import React from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import CryptoJS from 'crypto-js';
import Modal from '../Components/Modal'
import Loader from '../Components/Loader'
const Sreset = () => {

    const [uname, setUname] = React.useState('');
    const Navigate = useNavigate();
    const [toggle,setToggle] = React.useState(false)
    const [load,setLoad] = React.useState(false)
    const toggleShow = () => {
        setToggle(!toggle)
    }

    const { encryptedText } = useParams();
    React.useEffect(() => {
        try {
            const decryptedData = CryptoJS.AES.decrypt(encryptedText, `${process.env.key}`);
            const decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
            setUname(decryptedText);
            setLoad(true)
        } catch (error) {
            console.error('Decryption error:', error);
            toggleShow();
            setTimeout(() => {
                Navigate('/sforgot')
            },3000)
        } 
    },[])
    
    const [pass,setPass] = React.useState("");
    const [cfpass,setCfpass] = React.useState("");
    const [msg,setMsg] = React.useState("");
    const containsNumber = (str) =>  {
        return /\d/.test(str);
    }

    const [pcol,setPcol] = React.useState("white");
    //eslint-disable-next-line
    const [ccol,setCcol] = React.useState("black");
    const pwd = (e) => {
        setPass(e.target.value);
        if(pass.length > 7 && pass.length < 12 && containsNumber(pass)) {
            setPcol("green");
        } 
        else{ 
            setPcol("red");
        }
    }

    const Submit = () => {
        if(pass === cfpass && pass.length > 7 && pass.length < 12 && containsNumber(pass)) {
            axios.post('http://localhost:8000/resetpassword',{uname:uname,pass:pass})
            .then(res => {
                if(res.status === 200)  
                    Navigate('/login');
            })
            .catch(err => {
                setMsg("*Please try again Later");
            })

        }
        else{
            setCcol("red");
            setMsg("*Passwords doesnt match");
        }
    }

return (
    <>
    {load?<div className='d-flex justify-content-center align-items-center bg-slate-100 ' style={{ height:'100vh' }}>
        <div className='d-flex flex-column p-5 gap-4 rounded-md bg-white shadow-[0_0_10px_1px_rgba(0,0,0,.3)]'>
            <p className='h3 text-center bg-gradient-to-r from-[#183d67] to-[#000] bg-clip-text'>Reset Password</p> 
            <ul style={{ listStyle:'circle' }}>
                <li>Password must contain 7-12 characters</li>
                <li>Password must contain atleast one Digit</li>
            </ul>
            <input className='login-form-input' type='password' placeholder='Password' onChange={pwd} style={{ color: `${pcol}` }}></input>
            <input className='login-form-input' type='password' placeholder='Confirm Password' onChange={(e) => setCfpass(e.target.value)} style={{ color: pass === cfpass ?  "green" : "red" }}></input>
            <span className='text-danger'>{msg}</span>
            <button className='btn text-white bg-gradient-to-r from-[#183d67] to-[#000]' onClick={ Submit }>Submit</button>
        </div>
    </div>:<Loader/>}
    <Modal show = {toggle} title = {'Network Error..!!'}  msg = {'Please Try Again Later..'} change = {toggleShow}></Modal>
    </>
)} 

export default Sreset
