import React from 'react';
import Navbar from '../Navbar';
import logo from '../../logo2.svg';
import StyledButton from '../Forms/Button';

const Header = () => (
  <section className="header">
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
  </section>
);

export default Header;
