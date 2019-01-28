import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

const StyledButton = styled.button`
  
  width: 12.6rem;
  height: 3.2rem;
  background: ${palette('primary', 0)};
  color: ${palette('white', 0)}
  text-transform: uppercase;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-family: 'DarwinPro-Bold', Arial;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  border: 0px solid;
  padding: .4rem 1rem;
  transition: background .2s;
  box-shadow: 3px 3px 6px 0px rgba(0,0,0,0.2);

  &:hover {
    background: ${palette('primary', 3)};
    cursor: pointer;
  }

`;

export default StyledButton;