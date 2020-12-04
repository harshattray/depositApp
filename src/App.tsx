import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from './components/LoginComponent/LoginComponent';
import DashboardComponent from './components/DashboardComponent/DashboardComponent';
import { ProtectedRoute } from './ProtectedRoutes'


const App: React.FC = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginComponent} />
          <ProtectedRoute exact path="/profile" comp={DashboardComponent} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
