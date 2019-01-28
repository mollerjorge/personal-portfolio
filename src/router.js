import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './containers/App/App';

const PublicRouters = ({ history }) => {
  return (
    <Router history={history}>
      <div>
        <Route 
          exact
          path={"/"}
          component={App}
        />
      </div>
    </Router>
  )
}

export default PublicRouters;