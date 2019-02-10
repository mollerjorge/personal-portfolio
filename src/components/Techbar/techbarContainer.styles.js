import styled from 'styled-components';
import media from '../../helpers/media';

const TechBarContainer = styled.div`
  display: flex;
  width: 100%;
  ${media.phone`
    flex-direction: column;
  `} 

  .techbar__column {
    width: 50%;
    padding-left: 1.5rem;

    ${media.phone`
      width: 100%;
      padding-left: 0rem;
    `}
  }
`;

export default TechBarContainer;