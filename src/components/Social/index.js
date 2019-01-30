import React, { Component } from 'react';
import SocialWrapper from './social.styles';

class Social extends Component {
  static Square = props => <div className="social__square">{props.children}</div>

  render() {
    const { children } = this.props;
    const displayChildren = React.Children.map(children, child => child);

    return (
      <SocialWrapper>{ displayChildren }</SocialWrapper>
    );
  }
}

export default Social;