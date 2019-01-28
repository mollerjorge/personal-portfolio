import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';

class App extends Component {
  state = {
    appName: 'Personal Portfolio',
  };

  render() {
    const { appName } = this.state;
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}

export default App;