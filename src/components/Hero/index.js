import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeroWrapper from './hero.styles';

class Hero extends Component {
  static Left = props => <div className={`hero__left ${props.animateHero ? 'active' : ''}`}>{props.children}</div>;

  static Right = props => <div className={`hero__right ${props.animateHero ? 'active' : ''}`}>{props.children}</div>;

  render() {
    const { children, className } = this.props;
    const displayChildren = React.Children.map(children, child => child);
    return <HeroWrapper className={`${className} container`}>{displayChildren}</HeroWrapper>;
  }
}

Hero.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Hero;
