import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Screens/Home';
import Register from '../Screens/Register'
import LoginPage from '../Screens/LoginPage';
import CollectionDetail from '../Screens/CollectionDetail'
import CreateImage from '../Screens/CreateImage';
import Collection from '../Screens/AllCollection'
import AllCollection from '../Screens/AllCollection'

const Routes = ({setRightButtonText}) => {
    return (

  <Switch>
      
  <Route exact path='/'>
      <Home/>
  </Route>
  <Route exact path='/LoginPage'>
      <LoginPage setRightButtonText={setRightButtonText}/>
  </Route>
  <Route exact path='/Register'>
      <Register setRightButtonText={setRightButtonText}/>
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

   <Route>
      <div>Erro:404</div>
  </Route>
  
  </Switch>

    )
  }
  
  export default Routes;