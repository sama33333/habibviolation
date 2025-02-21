import React from 'react';
import ThanksTopImg from '../assets/thankstop.png';
import { TiTickOutline } from 'react-icons/ti';

const ThanksPage = () => {
  const handleReturnClick = () => {
    window.location.href = 'https://www.facebook.com';
  };

  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ width: '100%', height: '100vh' }}
    >
      <div className='position-relative'>
        <img
          src={ThanksTopImg}
          alt="top"
          className='position-absolute'
          style={{ width: '10rem', top: '-80px', right: '-80px', zIndex: 0 }}
        />

        <img
          src={ThanksTopImg}
          alt="top"
          className='position-absolute'
          style={{
            width: '10rem',
            bottom: '-80px',
            left: '-80px',
            transform: 'rotate(190deg)',
            zIndex: 0,
          }}
        />
        <div
          className='d-flex flex-column justify-content-center align-items-center p-4 rounded position-relative'
          style={{
            height: '400px',
            background: 'white',
            border: '20px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1,
          }}
        >
          <div
            className='d-flex justify-content-center align-items-center'
            style={{ width: '5rem', height: '5rem', borderRadius: '50%', background: 'rgb(243, 245, 251)' }}
          >
            <TiTickOutline className='fs-1' />
          </div>

          <h2 className='mt-4'>Thank You!</h2>
          <p className='my-4 text-center' style={{ color: 'gray', fontSize: '22px', fontWeight: '600' }}>
            We have received your submission
          </p>
          <button
            onClick={handleReturnClick}
            className='px-4 p-2 mt-4 border rounded text-white'
            style={{ background: 'rgb(14, 11, 61)', textDecoration: 'none' }}
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThanksPage;
