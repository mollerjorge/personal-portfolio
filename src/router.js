import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './containers/App/App';
import Work from './containers/Work/Work';

const PublicRouters = ({ history }) => (
  <Router history={history}>
    <div>
      <Route
        exact
        path="/"
        component={App}
      />
      <Route
        exact
        path="/work"
        component={Work}
      />
    </div>
  </Router>
);

export default PublicRouters;
