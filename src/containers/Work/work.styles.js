import styled from 'styled-components';
import { palette } from 'styled-theme';
import media from '../../helpers/media';

const WorkWrapper = styled.div`
  .left-arrow {
    width: 8rem;
    margin-top: 2rem;
    cursor: pointer;
  }

  .work {
    &__img-background {
      background-size: cover;
      background-attachment: fixed;
      width: 100%;
      height: auto;
    }

    &__legend {
      p {
        margin: 0 0 4rem 0;
      }

      h2 {
        margin: 0;
      }
    }

    &__case-study {
      display: flex;
      margin-top: 8rem;

      ${media.phone`
        flex-direction: column;
      `}
    }

    &__case-study-text {
      h3 {
        font-size: 2.6rem;
        line-height: 3.2rem;
        font-weight: normal;
        margin-bottom: 1.6rem;
      }

      p {
        font-size: 1.6rem;
        line-height: 2.4rem;
        font-family: 'Darwin Pro Light', Arial;
        font-weight: normal;
      }
      margin-bottom: 8rem;

      ${media.phone`
        margin-bottom: 5rem;
      `}

      a {
        color: #3c89de;
        font-weight: 600;
      }
    }

    &__left-column {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-right: 24rem;

      ${media.phone`
        margin-right: 1rem;
      `}
    }

    &__right-column {
      flex: 1;
    }

    &__right-column-text {
      h4 {
        font-size: 20px;
        line-height: 32px;
        font-family: 'Darwin Pro SemiBold';
        margin-bottom: 16px;
      }

      ul {
        list-style: none;
        padding: 0;
        li {
          font-size: 1.6rem;
          line-height: 2.4rem;
          font-family: 'Darwin Pro Light', Arial;
          font-weight: normal;
        }
      }
    }

    &__background {
      width: 100%;
      background: ${palette('white', 1)};
      ${props => (props.name === 'Noodle' ? 'background: #ececec' : '')}
    }

    &__img-wrapper {
      display: flex;
      flex-direction: column;

      ${media.phone`
        margin-top: 10rem;
      `}

      img {
        height: 100%;
        width: 100%;
        margin-bottom: 3rem;
      }

      img:nth-child(1) {
        margin-top: -5rem;
        ${props => (props.name === 'Noodle' ? 'margin-top: 2rem;' : '')}
      }
    }
  }
`;

export default WorkWrapper;
