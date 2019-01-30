import styled from 'styled-components';
import { palette, font } from 'styled-theme';

export const SectionWrapper = styled.div`
  margin-top: 15rem;  
  
  .section {
    &__title {
      position: relative;
      z-index: 10;

      &::before {
        bottom: -1.3rem;
        content: '${props => props.nro ? props.nro : ''}';
        color: ${palette('white', 1)};
        font-size: 20rem;
        font-family: ${font('normal')}; 
        left: -10rem;
        position: absolute;
        z-index: -1;
      }
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
`;

export const SectionContent = styled.div`
     width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 3rem 0;
      ${props => props.margin ? `margin: ${props.margin};` : ''}
      p { 
        max-width: 80rem;
        text-align: justify;
       }

`;