import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FooterWrapper from './footer.styles';

class Footer extends Component {
  static Content = props => (
    <div id="footer" className="footer">
      <div className="footer__content">{props.children}</div>
    </div>
  );

  render() {
    const { children } = this.props;
    const displayChildren = React.Children.map(children, child => React.cloneElement(child));
    return <FooterWrapper>{displayChildren}</FooterWrapper>;
  }
}

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Footer;
