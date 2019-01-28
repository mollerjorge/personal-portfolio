import React from 'react';
import Navbar from '../Navbar';
import logo from '../../logo2.svg';
import StyledButton from '../Forms/Button';
import Hero from '../Hero';
import Title from '../Title';
import profilePic from '../../images/jm.png';
import Section from '../Section';

const Header = () => (
  <section className="header">
    <div className="container">
      <Navbar>
        <Navbar.Brand>
          <img src={logo} alt="jorge moller main logo" />
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
          <img src={profilePic} alt="profile picture" />
        </Hero.Right>
      </Hero>

      <Section nro="01">
        <Section.Title>About Me</Section.Title>
        <Section.Content>
          <p>
            Hi, I'm Andrew Martin, an excitable freelance front-end web developer, with some
            full-stack chops, too. I live with an intense passion for web development.</p><p> Most days,
            I'm digging into a React.js web app, setting up a Rails API, or marking up an elegant
            interface. I also play nicely with Node.js, Angular.js, Ember.js, Ruby on Rails, and
            find it absolutely esssential to work with build tools like Webpack and Parcel. Some of
            my favorites: test-driving development, thoroughly architecting a RESTful API, or
            planning and creating an elegant user interface to solve a Client's business objective.
          </p>


        </Section.Content>
      </Section>
    </div>
  </section>
);

export default Header;
