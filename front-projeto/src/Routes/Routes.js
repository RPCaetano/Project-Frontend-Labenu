import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Screens/LoginPage';
import Home from '../Screens/Home';
import Register from '../Screens/Register'
import Explorer from '../Screens/Explorer'
import PrivatePage from '../Screens/PrivatePage'

function Routes() {
    return (
  <BrowserRouter>
  <Switch>
      
  <Route exact path='/'>
      <Home/>
  </Route>
  <Route exact path='/Login'>
      <Login/>
  </Route>
  <Route exact path='/Register'>
      <Register/>
  </Route>
  <Route exact path='/Explorer'>
      <Explorer/>
  </Route>
  <Route exact path='/PrivatePage'>
      <PrivatePage/>
  </Route>
   <Route>
      <div>Erro:404</div>
  </Route>
  
  </Switch>
  </BrowserRouter>
    )
  }
  
  export default Routes;