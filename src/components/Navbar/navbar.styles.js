import styled from 'styled-components';
import { palette, font } from 'styled-theme';
import media from '../../helpers/media';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8.8rem;

  .get-in-touch {
    ${media.phone`display: none`}
  }

  .navbar {
    &__brand {
      width: 5rem;
    }

    &__content {
      .hamburger-icon {
        position: absolute;
        display: none;
        right: 3rem;
        top: 3rem;

        ${media.phone`
          display: block;
        `}

        &.active {
          div:nth-child(1) {
            transform: rotate(45deg);
            transform-origin: left;
            width: 3.8rem;
          }

          div:nth-child(2) {
            opacity: 0;
            transform: translateX(-2rem);
          }

          div:nth-child(3) {
            transform: rotate(-45deg);
            transform-origin: left;
            width: 3.8rem;
          }
        }

        div {
          width: 5rem;
          height: 0.7rem;
          background: linear-gradient(45deg, ${palette('primary', 2)}, ${palette('primary', 3)});
          margin-bottom: .6rem;
          border-radius: 3rem;
          transition: all 0.3s ease-in-out;
        }

        div:nth-child(3) {
          margin-bottom: 0rem;
        }
      }

      ul {
        list-style: none;
        ${media.phone`display: none`}
        li {
          display: inline-block;
          margin-right: 2.4rem;

          a {
            position: relative;
            cursor: pointer;
            font-family: ${font('light', 0)};
            text-decoration: none;
            font-size: 1.6rem;
            font-weight: normal;
            transition: color 0.3s;
          }

          a:after {
            content: '';
            position: absolute;
            width: 0%;
            top: 2.5rem;
            left: 0;
            transition: width 0.3s ease-in-out;
          }
        }

        li:hover {
          a {
            color: ${palette('primary', 0)};
          }
          a:after {
            content: '';
            position: absolute;
            width: 100%;
            background: ${palette('primary', 0)};
            height: 0.4rem;
            top: 2.5rem;
            left: 0;
          }
        }
      }
    }
  }
`;

export default NavbarWrapper;
