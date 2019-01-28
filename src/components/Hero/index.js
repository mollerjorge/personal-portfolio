import React, { Component } from 'react';
import HeroWrapper from './hero.styles.js';

class Hero extends Component {
  static Left = props => <div className="hero__left">{props.children}</div>

  static Right = props => <div className="hero__right">{props.children}</div>

  render() {
    const { children } = this.props;
    const displayChildren = React.Children.map(children, child => child);
    return (
      <HeroWrapper>
        {displayChildren}
      </HeroWrapper>
    )
  }
}

export default Hero;