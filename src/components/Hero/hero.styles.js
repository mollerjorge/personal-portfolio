import styled from 'styled-components';

const HeroWrapper = styled.div`
  display: flex;

  .hero {
    &__left {
      flex: 1;
    }

    &__right {
      display: flex;
      flex: 1;
      justify-content: center;
      padding-top: 5rem;
      > img {
        height: 60rem;  
      }
    }
  }

`;

export default HeroWrapper;