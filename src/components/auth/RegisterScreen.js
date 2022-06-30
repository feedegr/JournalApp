import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { setError, uiRemoveError } from '../../actions/ui';
import { startRegisterEmailPassword } from '../../actions/auth';
import Swal from 'sweetalert2';
export const RegisterScreen = () => {
  
  

  const dispatch = useDispatch();
  const { msgError } = useSelector( state => state.ui );
  
  const [ formValues, handledInputChange ] = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { name, email, password, confirmPassword } = formValues;

  
  const handleRegister = (e) => {
    e.preventDefault();
    
    if ( isFormValid ()) {
      dispatch( startRegisterEmailPassword(name, email, password) );
    }
  }

  
  const isFormValid = () => {

    if(name.trim().length === 0) {
      dispatch(setError(''));
      Swal.fire( 'Error','Name is required','error')
      return false;
    }else if ( !validator.isEmail( email )) {
      dispatch(setError(''));
      Swal.fire( 'Error','Email not valid','error')
      return false;
    } else if ( password !== confirmPassword || password.length < 6 ) {
      dispatch(setError(''));
      Swal.fire( 'Error','Password not matched or not long enough','error')
      return false;
    }

      dispatch(uiRemoveError());
    return true
  }

  return (
    <div>
        
        <h3 className='auth__title'>Register</h3>

      <form 
      onSubmit={handleRegister}
      className='animate__animated animate__dadeIn animate__faster'
      >

          {
            msgError &&
            (
              <div className='auth__alert-error'>
                {msgError}
              </div>
            )
          }

          <input
              type='text'
              placeholder='Email'
              name='email'
              className='auth__input'
              autoComplete='off'
              value={email}
              onChange={handledInputChange}
          />

          <input
              type='text'
              placeholder='Name'
              name='name'
              className='auth__input'
              autoComplete='off'
              value={name}
              onChange={handledInputChange}
          />

          <input
              type='password'
              placeholder='Password'
              name='password'
              className='auth__input'
              value={password}
              onChange={handledInputChange}
          />  

          <input
              type='password'
              placeholder='Confirm password'
              name='confirmPassword'
              className='auth__input'
              value={confirmPassword}
              onChange={handledInputChange}
          />  
      
          <button 
          type='submit'
          className='btn btn-primary btn-block mb-5'
          
          >
            Register
          </button>


        <Link to='/auth/login'
            className='link'
        >
            Already registered?
        </Link>

      </form>
    </div>
  )
}
