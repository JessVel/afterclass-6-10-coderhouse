import React, { useState, useContext, useRef } from 'react';
import UserAuthContext from '../../context/UserAuthContext';
import Animation from '../animations/animation';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';

const Signup = () => {
  //Tomar valores de formularios
  const email = useRef();
  const password = useRef();
  const confPassword = useRef();

  const { singup } = useContext(UserAuthContext);
  const { push } = useHistory();

  // login
  const handleSubmit = (e) => {
    e.preventDefault();

    singup(
      email.current.value,
      password.current.value,
      confPassword.current.value,
    )
      .then(() => push('/'))
      .catch((err) =>
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
        }),
      );
  };

  return (
    <div
      className='container d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='row d-flex align-items-center justify-content-space'>
        <div className='col' style={{ width: '500px' }}>
          <h2 className='text-center mb-4 font-weight-bold'>Sign up 🛸</h2>
          <form className='p-0' onSubmit={handleSubmit}>
            <div className='form-group mb-2'>
              <label>Email</label>
              <input
                type='email'
                className='form-control'
                placeholder='Ingrese su email'
                name='email'
                ref={email}
              />
            </div>
            <div className='form-group mb-2'>
              <label>Password</label>
              <input
                type='password'
                className='form-control'
                placeholder='Ingrese su password'
                name='password'
                ref={password}
              />
            </div>
            <div className='form-group mb-2'>
              <label>Repetir password</label>
              <input
                type='password'
                className='form-control'
                placeholder='Repita su password'
                name='password'
                ref={confPassword}
              />
            </div>
            <button
              type='submit'
              className='btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4'
            >
              Sign up
            </button>
          </form>
          <small className='text-center mt-3'>
            Ya tenes cuenta?
            <Link to='/login'>Log in</Link>
          </small>
        </div>
      </div>
      <div className='col '>
        <Animation />
      </div>
    </div>
  );
};

export default Signup;
