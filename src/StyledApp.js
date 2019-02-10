import styled from 'styled-components';
import { palette } from 'styled-theme';

const StyledApp = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  input,
  textearea,
  span,
  div {
    color: ${palette('primary', 2)};
  }

  .logo {
    width: 2rem;
  }

  .container {
    padding-right: 32px;
    padding-left: 32px;
  }
  @media only screen and (min-width: 321px) {
    .container {
      padding-right: 46px;
      padding-left: 46px;
    }
  }
  @media only screen and (min-width: 768px) {
    .container {
      padding-right: 0;
      padding-left: 0;
      margin: 0 auto;
      width: 656px;
    }
  }
  @media only screen and (min-width: 1024px) {
    .container {
      width: 936px;
    }
  }
  @media only screen and (min-width: 1272px) {
    .container {
      width: 1032px;
    }
  }
  @media only screen and (min-width: 1512px) {
    .container {
      width: 1128px;
    }
  }
`;

export default StyledApp;
