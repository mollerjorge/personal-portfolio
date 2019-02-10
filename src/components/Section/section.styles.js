import styled from 'styled-components';
import { palette, font } from 'styled-theme';
import media from '../../helpers/media';

export const SectionWrapper = styled.div`
  margin-top: 15rem;  

  
  
  .section {
    &__title {
      position: relative;
      z-index: 10;
      
      ${media.phone`
        h1 {
          font-size: 6.3rem;
        }
      
      `}

      &::before {
        bottom: -4rem;
        content: '${props => (props.nro ? props.nro : '')}';
        color: ${palette('white', 1)};
        font-size: 20rem;
        font-family: ${font('normal')}; 
        left: -10rem;
        position: absolute;
        z-index: -1;

        ${media.phone`
          left: -5rem;
          bottom: -3rem;
        
        `}
      }
    }

    &__column {
      ${media.phone`
        margin-top: 0px !important;
      `}
    }

    &__row {
      display: flex;
      justify-content: space-around;
      width: 100%;

      ${media.phone`
          flex-direction: column;
          margin-bottom: 9rem;
      `}

      &:nth-child(3) {
        margin-bottom: 0rem;
      }
    }

    &__column {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 10rem;
      width: 100%;

      ${media.phone`
      
        height: 12rem;
      `}
    }

    &__title-underline {
    
      div {
        background: ${palette('primary', 0)};
        border-radius: 100rem;
        width: 20rem;
        height: .8rem;
      }

      div:nth-child(2) {
        margin-left: 10rem;
        margin-top: 1rem;
      }
    }
  }

  .example-enter {
    opacity: 0.01;
  }

  .example-enter.example-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .example-leave {
    opacity: 1;
  }

  .example-leave.example-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  
`;

export const SectionContent = styled.div`
  width: 100%;
  display: flex;
  ${props =>
    props.flexDirection ? `flex-direction: ${props.flexDirection};` : 'flex-direction: column;'}
  ${props =>
    props.justifyContent
      ? `justify-content: ${props.justifyContent};`
      : 'justify-content: center;'}
      align-items: center;
  padding: 3rem 0;
  ${props => (props.margin ? `margin: ${props.margin};` : '')}
  p {
    max-width: 80rem;
    text-align: justify;
  }
`;
