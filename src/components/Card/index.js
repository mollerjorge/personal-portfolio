import React, { Component } from 'react';
import CardWrapper from './card.styles';

class Card extends Component {
  static Background = props => <div className="card__background">{props.children}</div>;

  static Legend = props => <div className="card__legend">{props.children}</div>;

  render() {
    const { children, onClick, background } = this.props;
    const displayChildren = React.Children.map(children, child => child);
    return (
      <CardWrapper
        onClick={onClick}
        background={background}
      >
        {displayChildren}
      </CardWrapper>
    );
  }
}

export default Card;
