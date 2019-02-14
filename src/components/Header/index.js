import React, { Component } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';
import Navbar from '../Navbar';
import logo from '../../logo3.svg';
import StyledButton from '../Forms/Button';
import media from '../../helpers/media';

const HeaderWrapper = styled.div`
  .mobile-menu {
    opacity: 0;
    position: absolute;
    top: 9rem;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(45deg, ${palette('primary', 2)}, ${palette('primary', 3)});
    width: 100%;
    height: calc(100vh - 9rem);
    transition: all 0.3s;

    a {
      position: relative;
      cursor: pointer;
      font-family: ${font('light', 0)};
      text-decoration: none;
      font-size: 3.6rem;
      font-weight: normal;
      transition: color 0.3s;
      color: ${palette('white', 0)};
    }

    ul {
      list-style: none;
      padding: 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: calc(100vh - 9rem);

      li {
        margin-bottom: 2rem;
      }
    }

    ${media.phone`
        &.active {
          opacity: 1;
          z-index: 99999999;
        }
      `}
  }

  a.get-in-touch {
    align-items: center;
    border-radius: 10rem;
    border: 0px solid;
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.2);
    background: ${palette('primary', 0)};
    color: ${palette('white', 0)};
    display: flex;
    font-size: 1.6rem;
    font-family: 'Darwin Pro Bold';
    height: 3.5rem;
    justify-content: center;
    letter-spacing: 0.05rem;
    line-height: 2.4rem;
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    transition: all 0.2s;
    cursor: pointer;
    z-index: 999999999;

    ${media.phone`
      display: none;
    `}
  }
`;

class Header extends Component {
  state = {
    isMobileMenuShown: false
  };

  handleHamburguerIconClick = () => {
    this.setState({
      isMobileMenuShown: !this.state.isMobileMenuShown
    });
  };

  render() {
    return (
      <HeaderWrapper>
        <section className="header container">
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
                  <Link
                    to="about"
                    spy
                    smooth
                    offset={-70}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="work"
                    spy
                    smooth
                    offset={-70}
                    duration={500}
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="techstack"
                    spy
                    smooth
                    offset={-70}
                    duration={500}
                  >
                    Tech Stack
                  </Link>
                </li>
                <li>
                  <a href="https://medium.com/@_jmoller">Blog</a>
                </li>
              </ul>

              <div
                onClick={this.handleHamburguerIconClick}
                className={`hamburger-icon ${this.state.isMobileMenuShown ? 'active' : ''}`}
              >
                <div />
                <div />
                <div />
              </div>
            </Navbar.Content>

            <Navbar.Action>
              <Link
                to="footer"
                spy
                smooth
                offset={-70}
                duration={1000}
                className="get-in-touch"
              >
                Get in Touch
              </Link>
            </Navbar.Action>
          </Navbar>
          <div className={`mobile-menu ${this.state.isMobileMenuShown ? 'active' : ''}`}>
            <ul>
              <li>
                <Link
                  to="about"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="work"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="techstack"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                >
                  Tech Stack
                </Link>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </section>
      </HeaderWrapper>
    );
  }
}

export default Header;
