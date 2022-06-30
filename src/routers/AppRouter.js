import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { AuthRouter } from './AuthRouter'
import {firebase} from '../firebase/firebaseConfig'
import { JournalScreen } from '../components/journal/JournalScreen'
import { login } from '../actions/auth'

import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

import {  startLoadingnotes } from '../actions/notes'


export const AppRouter = () => {
  
  
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false)



  useEffect(() => {
    
    //pendiente de la autenticación
    firebase.auth().onAuthStateChanged( async (user) => {
      //pregunta si user tiene uid
      if (user?.uid){
        //logged correcto?
        dispatch( login(user.uid, user.displayName));
        setIsLoggedIn (true);
        dispatch ( startLoadingnotes (user.uid) );

      } else {
        setIsLoggedIn(false);
      }

      setChecking(false)

    });
    
  }, [dispatch, setChecking, setIsLoggedIn])

  if (checking){
    return (
      <div>
      <i className="fa-duotone fa-loader"></i>
      <h1>Loading...</h1>
      </div>
    )
  }
  
  
  
  return (
    
    
    <Router>
      <div>
        <Switch>

          <PublicRoute 
          path='/auth' 
          component={ AuthRouter }
          isAuth={ isLoggedIn }
          />

          <PrivateRoute 
            exact 
            isAuth={ isLoggedIn } 
            path='/' 
            component={ JournalScreen }
          />

          <Redirect to='/auth/login' />

        </Switch>
      </div>
    </Router>

  )
}
