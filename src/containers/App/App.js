import React, { Component, Fragment } from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Title from '../../components/Title';
import profilePic from '../../images/jm.png';
import Section from '../../components/Section';
import linkedin from '../../images/linkedin.svg';
import medium from '../../images/medium.svg';
import behance from '../../images/behance.svg';
import react from '../../images/react.svg';
import redux from '../../images/redux.png';
import node from '../../images/node.png';
import javascript from '../../images/javascript.png';
import sass from '../../images/sass.png';
import mongo from '../../images/mongo.png';
import Social from '../../components/Social';
import TechBar from '../../components/Techbar';
import Footer from '../../components/Footer'
import StyledButton from '../../components/Forms/Button';

class App extends Component {
  state = {
    appName: 'Personal Portfolio',
  };

  render() {
    const { appName } = this.state;
    return (
      <Fragment>
        <div className="container">
          <Header />

          <Social>
            <Social.Square>
              <img
                src={linkedin}
                alt="linkedin logo"
              />
            </Social.Square>
            <Social.Square>
              <img
                src={medium}
                alt="medium logo"
              />
            </Social.Square>
            <Social.Square>
              <img
                src={behance}
                alt="behance logo"
              />
            </Social.Square>
          </Social>

          <Hero>
            <Hero.Left>
              <Title>
            Hi!, I'm <br /> Jorge Moller
              </Title>
              <p>
            I’m a fullstack web developer who specializes in crafting <br /> perfomant and beautiful
            web applications.
              </p>
            </Hero.Left>
            <Hero.Right>
              <img
                src={profilePic}
                alt="profile"
              />
            </Hero.Right>
          </Hero>

          <Section nro="01">
            <Section.Title>About Me</Section.Title>
            <Section.Content>
              <p>
            Hi, I'm Andrew Martin, an excitable freelance front-end web developer, with some
            full-stack chops, too. I live with an intense passion for web development.
              </p>
              <p>
                {' '}
            Most days, I'm digging into a React.js web app, setting up a Rails API, or marking up an
            elegant interface. I also play nicely with Node.js, Angular.js, Ember.js, Ruby on Rails,
            and find it absolutely esssential to work with build tools like Webpack and Parcel. Some
            of my favorites: test-driving development, thoroughly architecting a RESTful API, or
            planning and creating an elegant user interface to solve a Client's business objective.
              </p>
              <StyledButton margin="3rem 0">
            Download cv
              </StyledButton>
            </Section.Content>
          </Section>

          <Section nro="02">
            <Section.Title>Tech Stack</Section.Title>
            <Section.Content margin="8rem 0">
              <div style={{ width: '100%', display: 'flex' }}>
                <div style={{ width: '50%', paddingRight: '1.5rem' }}>
                  <TechBar
                    brand="React js"
                    percentage="90%"
                    years="4"
                  >
                    <TechBar.Brand>
                      <img
                        src={react}
                        alt="react logo"
                        className="techbar__react"
                      />
                    </TechBar.Brand>
                    <TechBar.Content />
                  </TechBar>
                  <TechBar
                    brand="Redux"
                    percentage="90%"
                    years="2"
                  >
                    <TechBar.Brand>
                      <img
                        src={redux}
                        alt="redux logo"
                        className="techbar__redux"
                      />
                    </TechBar.Brand>
                    <TechBar.Content />
                  </TechBar>

                  <TechBar
                    brand="Node js"
                    percentage="70%"
                    years="3"
                  >
                    <TechBar.Brand>
                      <img
                        src={node}
                        alt="node logo"
                        className="techbar__node"
                      />
                    </TechBar.Brand>
                    <TechBar.Content />
                  </TechBar>
                </div>


                <div style={{ width: '50%', paddingLeft: '1.5rem' }}>
                  <TechBar
                    brand="React js"
                    percentage="90%"
                    years="5"
                  >
                    <TechBar.Brand>
                      <img
                        src={javascript}
                        alt="javascript logo"
                        className="techbar__react"
                      />
                    </TechBar.Brand>
                    <TechBar.Content />
                  </TechBar>
                  <TechBar
                    brand="Sass"
                    percentage="90%"
                    years="2"
                  >
                    <TechBar.Brand>
                      <img
                        src={sass}
                        alt="sass logo"
                        className="techbar__sass"
                      />
                    </TechBar.Brand>
                    <TechBar.Content />
                  </TechBar>

                  <TechBar
                    brand="Mongo"
                    percentage="70%"
                    years="2"
                  >
                    <TechBar.Brand>
                      <img
                        src={mongo}
                        alt="mongo logo"
                        className="techbar__node"
                      />
                    </TechBar.Brand>
                    <TechBar.Content />
                  </TechBar>
                </div>
              </div>
            </Section.Content>
          </Section>

          <Footer>
            <Footer.Content>
              <h2>jmoller2106@gmail.com</h2>
              <h2>+598 99 52 04 52</h2>
            </Footer.Content>
          </Footer>
        </div>
      </Fragment>
    );
  }
}

export default App;