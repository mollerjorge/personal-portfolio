import styled from 'styled-components';
import { palette, font } from 'styled-theme';

const SectionWrapper = styled.div`
  margin-top: 15rem;  
  .section {

    &__content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 3rem 0;
      p { 
        max-width: 80rem;
        text-align: justify;
       }
    }

    &__title {
      position: relative;
      z-index: 10;

      &::before {
        content: '${props => props.nro ? props.nro : 'sss'}';
        color: ${palette('white', 1)};
        left: -10rem;
        bottom: -1.3rem;
        font-size: 20rem;
        font-family: ${font('normal')}; 
        z-index: -1;
        position: absolute;
      }

    }

    &__title-underline {
    
      div {
        width: 20rem;
        height: .8rem;
        background: ${palette('primary', 0)};
        border-radius: 100rem;
      }

      div:nth-child(2) {
        margin-left: 10rem;
        margin-top: 1rem;
      }

    }
  }



`;

export default SectionWrapper;