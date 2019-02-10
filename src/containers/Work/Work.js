import React, { Component, Fragment } from 'react';
import WorkWrapper from './work.styles';
import leftArrow from '../../images/leftArrow.svg';

class Work extends Component {
  state = {
    show: false
  };

  componentWillMount() {
    const { hideOverlay } = this.props;
    setTimeout(() => {
      this.setState({
        show: true
      });
      setTimeout(() => {
        hideOverlay();
      }, 700);
    }, 100);
  }

  render() {
    const { work } = this.props;
    const { show } = this.state;
    return (
      <Fragment>
        {show && (
          <div>
            <WorkWrapper name={work.name}>
              <div className="container">
                <img
                  className="left-arrow"
                  onClick={this.props.goToHome}
                  src={leftArrow}
                  alt="left arrow"
                />
              </div>

              <div className="work__legend container">
                <h2>{work.name}</h2>
                <p>{work.desc}</p>
              </div>

              <img
                src={work.workBackground}
                alt="nobly pos system at coffee shop"
                className="work__img-background"
              />

              <div className="work__case-study container">
                <div className="work__left-column">
                  {work.client && <div className="work__case-study-text">
                    <h3>The Client</h3>
                    <p>{work.client}</p>
                  </div> }
                  <div className="work__case-study-text">
                    <h3>Project Overview</h3>
                    <p>{work.project}</p>
                    {work.projectUrl && (
                      <p>
                        See it live on:{' '}
                        <a
                          href="https://mollerjorge.github.io/nova/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Nova Link
                        </a>
                      </p>
                    )}
                  </div>
                  <div className="work__case-study-text">
                    <h3>Main Challenge</h3>
                    <p>{work.challenge}</p>
                  </div>
                </div>

                <div className="work__right-column">
                  <div className="work__right-column-text">
                    <h4>Tools and technologies</h4>
                    <ul>
                      {work.tools.map(tool => (
                        <li>{tool}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="work__background">
                <div className="container">
                  <div className="work__img-wrapper">
                    {work.images.map(img => (
                      <img
                        src={img}
                        alt="work"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </WorkWrapper>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Work;
