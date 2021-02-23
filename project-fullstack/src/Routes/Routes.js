import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function Router() {
    return (
  <BrowserRouter>
  <Switch>
      
  <Route exact path='/'>
      <HomePage/>
  </Route>
  <Route exact path='/LoginPage'>
      <LoginPage/>
  </Route>
  <Route exact path='/Register'>
      <Register/>
  </Route>
  <Route exact path='/Explorer'>
      <ExplorerPage/>
  </Route>
   <Route>
      <div>Erro:404</div>
  </Route>
  
  </Switch>
  </BrowserRouter>
    )
  }
  
  export default Router;