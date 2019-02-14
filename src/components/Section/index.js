import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SectionWrapper, SectionContent } from './section.styles';
import Title from '../Title';

class Section extends Component {
  static Title = props => (
    <div
      className="section__title"
      style={{ margin: `${props.margin ? props.margin : '0'}` }}
    >
      <Title>{props.children}</Title>
    </div>
  );

  static Content = props => <SectionContent {...props}>{props.children}</SectionContent>;

  static Row = props => <div className="section__row">{props.children}</div>;

  static Column = props => (
    <div
      className="section__column"
      style={{ margin: props.margin }}
    >
      {props.children}
    </div>
  );

  render() {
    const {
      children, nro, id, className, marginTop
    } = this.props;
    const displayChildren = React.Children.map(children, child =>
      React.cloneElement(child, { nro }));
    return (
      <SectionWrapper
        className={`${className} container`}
        nro={nro}
        id={id}
        marginTop={marginTop}
      >
        {displayChildren}
      </SectionWrapper>
    );
  }
}

Section.defaultProps = {
  nro: '',
  className: '',
  id: '',
};

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  nro: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Section;
