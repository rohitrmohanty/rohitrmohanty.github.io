import React from 'react';

// Module Imports
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Homepage Imports
import Homepage from './components/homepage/homepage';

// Component Storing all the routes needed by the application
const Routes = () => (
  <BrowserRouter>
    <Switch>
      {
        // Base Routes
      }
      <Route path='/' component={Homepage} exact/>
    </Switch>
  </BrowserRouter>
)

export default Routes;