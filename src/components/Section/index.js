import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SectionWrapper, SectionContent } from './section.styles';
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

  static Content = props => <SectionContent {...props}>{props.children}</SectionContent>;

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
  nro: '',
  className: '',
};

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  nro: PropTypes.string,
  className: PropTypes.string,
};

export default Section;
