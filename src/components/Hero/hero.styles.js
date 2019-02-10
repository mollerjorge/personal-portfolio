import styled from 'styled-components';
import media from '../../helpers/media';
import {palette} from 'styled-theme';

const HeroWrapper = styled.div`
  display: flex;
  ${media.phone`
      h1 {
        font-size: 6rem;
        line-height: 6.2rem;
      }

      h1:nth-child(1) {
        display: none;
      }
    `}

  .mobile__title {
    display: none;

    ${media.phone`
    
      display: block;
    `}
  }  

  .dot {
    width: 1.5rem;
    height: 1.5rem;
    background: ${palette('primary', 0)};
    border-radius: 10rem;
    display: inline-block;

    ${media.phone`
    
      width: 1.2rem;
      height: 1.2rem;
    `}
  }

  .hero {
  
    &__left {
      flex: 1;
      margin-top: -5rem;
      opacity: 0;
      transition: all 1s ease-in-out;
    }

    &__left.active {
      margin-top: 0rem;
      opacity: 1;
    }

    &__right {
      margin-top: -5rem;
      opacity: 0;
      transition: all 1s ease-in-out;

      ${media.phone`
        display: none;
      `}
      
      display: flex;
      flex: 1;
      justify-content: center;
      padding-top: 5rem;
      > img {
        height: 60rem;
      }
    }

    &__right.active {
      margin-top: 0rem;
      opacity: 1;
    }
  }
`;

export default HeroWrapper;
