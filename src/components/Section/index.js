import React, { Component } from 'react';
import SectionWrapper from './section.styles';
import Title from '../Title';

class Section extends Component {
  static Title = props => (
    <div className="section__title">
      <Title>{props.children}</Title>
      <div className="section__title-underline">
        <div></div>
        <div></div>
      </div>
    </div>
  )

  static Content = props => <div className="section__content">{props.children}</div>

  render() {
    const { children } = this.props;
    const displayChildren = React.Children.map(children, child => React.cloneElement(child, {nro: this.props.nro}));
    console.log(this.props.nro);
    return (
      <SectionWrapper className={this.props.className} nro={this.props.nro}>
        { displayChildren }
      </SectionWrapper>
    );
  }
}

export default Section;