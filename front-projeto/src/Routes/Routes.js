import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Screens/Home';
import Register from '../Screens/Register'
import Explorer from '../Screens/Explorer'
import PrivatePage from '../Screens/PrivatePage'
import LoginPage from '../Screens/LoginPage';
import CollectionDetail from '../Screens/CollectionDetail'

function Routes() {
    return (
  <BrowserRouter>
  <Switch>
      
  <Route exact path='/'>
      <Home/>
  </Route>
  <Route exact path='/LoginPage'>
      <LoginPage/>
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
  
<Route exact path ='/CollectionDetail'>
  <CollectionDetail/>
</Route>
   <Route>
      <div>Erro:404</div>
  </Route>
  
  </Switch>
  </BrowserRouter>
    )
  }
  
  export default Routes;