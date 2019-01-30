import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SectionWrapper from './section.styles';
import Title from '../Title';

class Section extends Component {
  static Title = props => (
    <div className="section__title">
      <Title>{props.children}</Title>
      <div className="section__title-underline">
        <div />
        <div />
      </div>
    </div>
  );

  static Content = props => <div className="section__content">{props.children}</div>;

  render() {
    const { children, nro, className } = this.props;
    const displayChildren = React.Children.map(children, child =>
      React.cloneElement(child, { nro }));
    return (
      <SectionWrapper
        className={className}
        nro={nro}
      >
        {displayChildren}
      </SectionWrapper>
    );
  }
}

Section.defaultProps = {
  children: [],
  nro: '',
  className: '',
};

Section.propTypes = {
  children: PropTypes.node,
  nro: PropTypes.string,
  className: PropTypes.string,
};

export default Section;
