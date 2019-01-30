import styled from 'styled-components';
import {font, palette} from 'styled-theme';

const TechBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom : 3rem;
    .techbar {
      &__content {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        margin-left: 2rem;
      }

      &__title {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }

      &__brand {
        font-size: 2.4rem;
        font-family: ${font('semibold')}

      }

      &__years {
        font-size: 1.6rem;
        margin-left: 1rem;
        color: ${palette('white', 2)};
      }

      &__percentage {
        font-family: ${font('semibold')}
        font-size: 2rem;
      }

      &__bar-content {
        width: ${props => props.percentage};
        height: 1.8rem;
        background: ${palette('primary', 0)};
        border-radius: 100rem;
        position: relative;

      }

      &__bar{
        content: "";
        border-radius: 10rem;
        width: 100%;
        height: 1.8rem;
        background: ${palette('white', 3)};
        display: inline-block;
        box-shadow: 0rem .8rem .7rem 0px rgba(7,33,66,0.15);
      }

      &__redux,
      &__node,
      &__sass,
      &__react {
        width: 8rem;
      }
    }
`;

export default TechBarWrapper;
