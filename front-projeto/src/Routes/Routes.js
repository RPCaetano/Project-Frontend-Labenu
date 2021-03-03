import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Screens/Home';
import Register from '../Screens/Register'
import Explorer from '../Screens/AllCollection'
import LoginPage from '../Screens/LoginPage';
import CollectionDetail from '../Screens/CollectionDetail'
import CreateImage from '../Screens/CreateImage';
import Collection from '../Screens/AllCollection'
import PrivatePage from '../Screens/PrivatePage'
import AllCollection from '../Screens/AllCollection'

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
  <Route exact path='/AllCollection'>
      <AllCollection/>
  </Route>
  <Route exact path='/CreateImage'>
      <CreateImage/>
  </Route>
  <Route exact path ='/Collection'>
  <Collection/>
</Route>
  
<Route exact path ='/image/:id'>
  <CollectionDetail/>
</Route>
  
<Route exact path ='/AllCollection'>
  <AllCollection/>
</Route>
<Route exact path ='/PrivatePage'>
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