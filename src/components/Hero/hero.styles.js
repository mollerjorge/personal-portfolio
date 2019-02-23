import styled, { keyframes } from 'styled-components';
import {palette} from 'styled-theme';
import media from '../../helpers/media';

const astronautBounce = keyframes`
  0%   { bottom: 5rem; }
  50% { bottom: 3rem}
  100% { bottom:  5rem}
`;

const notebook = keyframes`
  0%   { bottom: 20rem; }
  50% { bottom: 22rem}
  100% { bottom:  20rem}
`;

const HeroWrapper = styled.div`
  display: flex;
  min-height: 93vh;
  position: relative;

  

  .astronaut-man {
    position: absolute;
    width: 32rem;
    bottom: 5rem;
    right: 10rem;
    animation: ${astronautBounce} 7s ease-in-out infinite;
    ${media.phone`
      display: none;
    `}
  } 

  .notebook {
    position: absolute;
    width: 14rem;
    bottom: 20rem;
    right: 38rem;
    animation: ${notebook} 7s ease-in-out infinite;
    ${media.phone`
      display: none;
    `}
  }

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

      ${media.phone`
        padding-top: 16rem;
      `}
    }

    &__left.active {
      margin-top: 0rem;
      opacity: 1;

      
    }

    &__right {
      margin-top: 5rem;
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
