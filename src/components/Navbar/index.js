import React, { Component, Fragment } from 'react';
import NavbarWrapper from './navbar.styles.js';

class Navbar extends Component {
  static Brand = props => <div className="navbar__brand">{props.children}</div>

  static Content = props => <div className="navbar__content">{props.children}</div>

  static Action = props => <div className="call-to-action">{props.children}</div>

  render() {
    const { children } = this.props;
    const displayChildren = React.Children.map(children, child =>
      child)
    return (
      <NavbarWrapper>
        {displayChildren}
      </NavbarWrapper>
    );
  }
}

export default Navbar;
