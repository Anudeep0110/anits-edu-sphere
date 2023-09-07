import React from 'react';
import axios from 'axios'
import Modal from '../Components/Modal'
import { useNavigate } from 'react-router-dom';

const Fpassword = () => {

  const [uname ,setUname] = React.useState('')
  const [toggle,setToggle] = React.useState(false)
  const [err,setErr] = React.useState('')
  const [msg,setMsg] = React.useState('')

  const toggleShow = () => {
    setToggle(!toggle)
  }

  const Navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/forgotpassword',{uname:uname})
    .then(res => {
      console.log(res);
      if(res.status === 200){
        setMsg('We have sent a password reset link to your respective mailId, Please verify! Thank You!')
        setToggle(true)
        setTimeout(() => {
          Navigate('/slogin');
        },3000)
      }
    })
    .catch(err => {
      setErr("*Invalid Username")
      console.log(err);
    })
  }
  return (
    <>
    <section className="gradient-form" style={{ backgroundColor: '#27374D' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6 order-lg-last " style={{backgroundColor:"rgba(191, 216, 255,.5)"}}>
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="data:image/jpeg;base64,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"
                        style={{ width: '185px' , mixBlendMode:"multiply"}}
                        alt="logo" className="mt-1 mb-5 pb-1"
                      />
                      
                    </div>

                    <form onSubmit={onSubmit}>
                      <h4 className="mt-1 mb-4 pb-1 text-center" style={{fontSize:"30px"}}>Reset Password</h4>
                      <div className="form-outline mt-1 pb-1">
                        <input
                          type="text"
                          className=" mt-3 mb-2 login-form-input"
                          placeholder="Username"
                          onInput={(e) => {setUname(e.target.value)}}
                        />
                        
                      </div>
                      <span className='text-danger'>{err}</span>
                      <div className="text-center pt-1 mb-5 mt-5 pb-1">
                        <button className="btn btn-primary btn-block w-100 fa-lg  mb-3" onClick={onSubmit} type="button">
                          Submit
                        </button>
                      </div>

                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2" style={{backgroundImage:"url('assets/forgotpass.jpg')"}}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Modal show = {toggle} msg = {msg} change = {toggleShow}></Modal>
    </>
  );
};

export default Fpassword;