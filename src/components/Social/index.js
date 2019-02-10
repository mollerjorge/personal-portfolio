import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocialWrapper from './social.styles';

class Social extends Component {
  static Square = props => (
    <div
      onClick={() => {
        window.open(props.url, '_blank');
      }}
      className="social__square"
    >
      {props.children}
    </div>
  );

  render() {
    const { children } = this.props;
    const displayChildren = React.Children.map(children, child => child);

    return <SocialWrapper>{displayChildren}</SocialWrapper>;
  }
}

Social.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Social;
