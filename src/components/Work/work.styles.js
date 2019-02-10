import styled from 'styled-components';
import { palette } from 'styled-theme';
import media from '../../helpers/media';

const WorkBackground = styled.div`
  position: absolute;
  width: calc(100% - 8rem);
  height: 90%;
  border-radius: 0px 8px 8px 0px;
  background: ${palette('white', 1)};
  bottom: 0rem;
  z-index: -1;

  ${media.phone`
    width: calc(100% - 3rem);
  `}
`;

export default WorkBackground;