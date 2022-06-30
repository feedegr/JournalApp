import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import {  startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {
    
    
    const dispatch = useDispatch ();
    const { loading } = useSelector( state => state.ui );
    
    const [ formValues, handledInputChange ] = useForm({
        email: 'fede@gmail.com',
        password: '123456'
    });
    
    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword( email, password ));
    }

    const handleGoogleLogin = () => {
        dispatch (startGoogleLogin());
    }

    return (
    <div>
        
        <h3 className='auth__title'>Login</h3>

        <form 
        onSubmit={ handleLogin }
        className='animate__animated animate__dadeIn animate__faster'
        
        >

            <input
                type='text'
                placeholder='Email'
                name='email'
                className='auth__input'
                autoComplete='off'
                value={ email }
                onChange={handledInputChange}
            />

            <input
                type='password'
                placeholder='Password'
                name='password'
                className='auth__input'
                value={ password }
                onChange={handledInputChange}
            />  
        
            <button 
            type='submit'
            className='btn btn-primary btn-block'
            disabled={ loading }
            >
                Login
            </button>

            
        
        
        <div className='auth__social-networks'>
            <p>Login social networks</p>
        </div>

        
        <div 
            className="google-btn"
            onClick={ handleGoogleLogin }
        >
            <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
                <b>Sign in with google</b>
            </p>
        </div>

        <Link to='/auth/register'
            className='links'
        >
            Create new account
        </Link>

        </form>
    </div>
  )
}
