import styled from 'styled-components';
import { palette } from 'styled-theme';
import media from '../../helpers/media';

const CardWrapper = styled.div`
  height: 60rem;
  width: 50rem;

  ${media.phone`
  
    height: 31rem;
    width: 26rem;
  `}

  border-radius: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;

  &:nth-child(odd) {
    margin-top: -8rem;
  }
  overflow: hidden;

  position: relative;

  .card__legend {
    padding: 4.8rem 4.8rem;
    position: absolute;
    bottom: 0;
    z-index: 1000000;
    width: 36rem;
    transition: all 0.3s;
    

    ${media.phone`
      padding: 1rem;
      width: 26rem;
    `}

    h5 {
      font-size: 1.2rem;
      color: ${palette('white', 0)};
      font-family: 'Darwin Pro Light', Arial;
      font-weight: 100;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;

      ${media.phone`
        font-size: 1rem;
      `}
    }

    h4 {
      font-family: 'Darwin Pro Light', Arial;
      font-weight: normal;
      font-size: 2.6rem;
      color: ${palette('white', 0)};
      margin: 0;
    }

    p {
      font-family: 'Darwin Pro Light', Arial;
      font-size: 2rem;
      line-height: 3.2rem;
      color: ${palette('white', 0)};
      margin-top: 1rem;
      text-align: left;

      ${media.phone`
        font-size: 1.5rem;
        line-height: 2rem;
      `}
    }
  }

  .card__overlay {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 111111;
    border-radius: 1rem;
    transition: background 0.4s;
  }

  img {
    width: auto;
    height: 100%;
    transition: all 0.4s ease-out;

    &.noodle,
    &.integra {
      margin-left: -20rem;
    }

    &.sinergy {
      margin-left: -10rem;
    }

    &.technicalservices {
      margin-left: -15rem;
    }
  }

  .card__background {
    opacity: 0;
    background: linear-gradient(0deg, rgba(255, 4, 8, 0.8), rgba(105, 29, 145, 0.8));
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 111111;
    border-radius: 1rem;
    transition: all 0.4s;
  }

  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.08);
    }

    .card__background {
      opacity: 1;
      background: linear-gradient(0deg, rgba(255, 4, 8, 0.8), rgba(105, 29, 145, 0.8));
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 111111;
      border-radius: 1rem;
      transition: all 0.4s;
    }

    .card__legend {
      padding-bottom: 10rem;
    }
  }
`;

export default CardWrapper;
