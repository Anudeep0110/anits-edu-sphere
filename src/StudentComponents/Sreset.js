import React from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

const Sreset = () => {

    const Navigate = useNavigate();
    const { uname } = useParams();
    const [pass,setPass] = React.useState("");
    const [cfpass,setCfpass] = React.useState("");
    const [msg,setMsg] = React.useState("");
    const containsNumber = (str) =>  {
        return /\d/.test(str);
    }

    const [pcol,setPcol] = React.useState("white");
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
                    Navigate('/slogin');
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
    <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor:'#27374D', height:'100vh' }}>
        <div className='d-flex flex-column p-5 gap-4 bg-white' style={{ borderRadius:'20px' }}>
            <p className='h3 text-center'>Reset Password</p> 
            <ul style={{ listStyle:'circle' }}>
                <li>Password must contain 7-12 characters</li>
                <li>Password must contain atleast one Digit</li>
            </ul>
            <input className='login-form-input' type='password' placeholder='Password' onChange={pwd} style={{ color: `${pcol}` }}></input>
            <input className='login-form-input' type='password' placeholder='Confirm Password' onChange={(e) => setCfpass(e.target.value)} style={{ color: pass === cfpass ?  "green" : "red" }}></input>
            <span className='text-danger'>{msg}</span>
            <button className='btn btn-primary' onClick={ Submit }>Submit</button>
        </div>
    </div>
    </>
)} 

export default Sreset
