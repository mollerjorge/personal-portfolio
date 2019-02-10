import styled from 'styled-components';
import { palette } from 'styled-theme';
import media from '../../helpers/media';

const SocialWrapper = styled.div`
  position: fixed;
  right: 0rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999999;
  .social {
    &__square {
      align-items: center;
      background: ${palette('primary', 0)};
      display: flex;
      width: 5rem;
      height: 5rem;
      justify-content: center;
      cursor: pointer;

      ${media.phone`
        width: 4rem;
        height: 4rem;
      `}

      margin-top: 1rem;
      > img {
        width: 2.2rem;
      }
    }
  }
`;

export default SocialWrapper;
