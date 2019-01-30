import styled from 'styled-components';
import { palette } from 'styled-theme';

const SocialWrapper = styled.div`

    position: fixed;
    top: 50%;
    right: 0rem;
    transform: translateY(-50%);
    .social {

      &__square {
        width: 5rem;
        height: 5rem;
        background: ${palette('primary', 0)};
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 1rem;
        > img {
          width: 2.2rem;
        }
      }
    }

`;

export default SocialWrapper;