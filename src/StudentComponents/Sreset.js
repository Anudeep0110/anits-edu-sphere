import React from 'react'

const Sreset = () => {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center text-white' style={{ backgroundColor:'#27374D', height:'100vh' }}>
        <div className='d-flex flex-column border border-3 p-5 gap-5' style={{ borderRadius:'20px' ,backgroundColor:'rgba(255,255,255,.3)'}}>
            <p className='h3 text-white text-center'>Reset Password</p> 
            <input className='login-form-input-1' type='password' placeholder='Password'></input>
            <input className='login-form-input-1' type='password' placeholder='Confirm Password'></input>
            <button className='btn btn-primary'>Submit</button>
        </div>
    </div>
    </>
  )
}

export default Sreset
