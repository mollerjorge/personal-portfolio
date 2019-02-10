import styled from 'styled-components';
import { palette } from 'styled-theme';
import footer from '../../images/footer.svg';
import media from '../../helpers/media';

const FooterWrapper = styled.div`
  
  background-image: url('${footer}');
  background-repeat: no-repeat;
  background-size: 100%;
  bottom: -40rem;
  height: 30rem;
  left: 0;
  position: absolute;
  width: 100%;
  
  ${media.phone`
    display: none;
  `}

  .footer {
    &__content {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 8rem;

      ${media.phone`
        margin-top: 4rem;
      `}
      h3 {
        color: ${palette('white', 0)};
        line-height: 6rem;
        margin: 0;

        ${media.phone`
          font-size: 2rem;
      `}
      }
    }
  }
`;

export default FooterWrapper;
