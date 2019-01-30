import React from 'react';
import Navbar from '../Navbar';
import logo from '../../logo2.svg';
import StyledButton from '../Forms/Button';
import Hero from '../Hero';
import Title from '../Title';
import profilePic from '../../images/jm.png';
import Section from '../Section';
import linkedin from '../../images/linkedin.svg';
import medium from '../../images/medium.svg';
import behance from '../../images/behance.svg';
import react from '../../images/react.svg';
import redux from '../../images/redux.png';
import node from '../../images/node.png';
import javascript from '../../images/javascript.png';
import sass from '../../images/sass.png';
import mongo from '../../images/mongo.png';
import Social from '../Social';
import TechBar from '../Techbar';

const Header = () => (
  <section className="header">
    <div className="container">
      <Navbar>
        <Navbar.Brand>
          <img
            src={logo}
            alt="jorge moller main logo"
          />
        </Navbar.Brand>
        <Navbar.Content>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Tech Stack</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </Navbar.Content>
        <Navbar.Action>
          <StyledButton primary>Get in Touch</StyledButton>
        </Navbar.Action>
      </Navbar>

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
        </Section.Content>
      </Section>

      <Section nro="02">
        <Section.Title>Tech Stack</Section.Title>
        <Section.Content>
          <div style={{ width: '100%', display: 'flex' }}>
            <div style={{width: '50%', paddingRight: '1.5rem'}}>
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


            <div style={{width: '50%', paddingLeft: '1.5rem'}}>
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
    </div>
  </section>
);

export default Header;
