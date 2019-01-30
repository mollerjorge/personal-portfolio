import React, { Component } from 'react';
import TechBarWrapper from './techbar.styles';

class TechBar extends Component {

  static Brand = props => <div className="techbar__brand">{props.children}</div>

  static Content = ({percentage, brand, years}) => {
    return (
      <div className="techbar__content">
        <div className="techbar__title">
          <div>
            <span className="techbar__brand">{brand}</span>
            <span className="techbar__years">{years} years</span>
          </div>
          <div className="techbar__percentage">
            {percentage}
          </div>
        </div>
        <div className="techbar__bar">
          <div className="techbar__bar-content"></div>
        </div>
      </div>
    );
  }

  render() {
    const {children, percentage, brand, years} = this.props;
    const displayChildren = React.Children.map(children, child => {
      return React.cloneElement(child, {percentage, brand, years});
    })
    return (
      <TechBarWrapper percentage={percentage}>
        {displayChildren}
      </TechBarWrapper>
    );
  }
}

export default TechBar;