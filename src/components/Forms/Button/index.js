import styled from 'styled-components';
import { palette } from 'styled-theme';

const StyledButton = styled.button`
  align-items: center;
  border-radius: 10rem;
  border: 0px solid;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.2);
  background: ${palette('primary', 0)};
  color: ${palette('white', 0)};
  display: flex;
  font-size: 1.6rem;
  font-family: 'Darwin Pro Bold';
  height: 3.5rem;
  justify-content: center;
  letter-spacing: 0.05rem;
  line-height: 2.4rem;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  transition: all 0.2s;
  cursor: pointer;
  z-index: 999999999;
  ${props => (props.margin ? `margin ${props.margin};` : '')}
  

  width: 17rem;

  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    background: ${palette('primary', 3)};
    cursor: pointer;
    transform: translateY(-0.1rem);
  }

  > a {
    color: white;
  }
`;

export default StyledButton;
