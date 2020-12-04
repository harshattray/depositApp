import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from './components/LoginComponent/LoginComponent';


const App: React.FC = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginComponent} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
