import styled from 'styled-components';
import { palette, font } from 'styled-theme';

const NavbarWrapper = styled.nav`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8.8rem;
  .navbar {
    &__brand {
      width: 8rem;  
    }

    &__content {
      ul {
        list-style: none;

        li {
          display: inline-block;
          margin-right: 2.4rem;

          a {
            position: relative;
            font-family: ${font('light', 0)};
            text-decoration: none;
            font-size: 1.6rem;
            font-weight: normal;
            transition: color .3s;
          }

          a:after {
            content: '';
            position: absolute;
            width: 0%;
            top: 2.5rem;
            left: 0;
            transition: width .3s ease-in-out;
          }

        }

        li:hover {
          a {
            color: ${palette('primary', 0)};
          }
          a:after  {
            content: '';
            position: absolute;
            width: 100%;
            background: ${palette('primary', 0)};
            height: .4rem;
            top: 2.5rem;
            left: 0;
          }
        }
        
      }
    }
    
  }

`;

export default NavbarWrapper;