import styled, { keyframes, css } from 'styled-components';
import { palette } from 'styled-theme';

const animateOverlay = keyframes`
  0%   { left: 100vw; }
  50%  {  left: 0vw;}
  100% { left: -100vw }

`;

const AppOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: ${palette('white', 1)};
  z-index: 9999999;
  left: 100vw;

  ${props =>
    props.showOverlay
      ? css`
          animation: ${animateOverlay} 1.5s;
        `
      : ''}
`;

export default AppOverlay;
