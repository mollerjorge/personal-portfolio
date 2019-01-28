import styled from 'styled-components';
import { palette, font } from 'styled-theme';

console.log(palette('primary', 2));
const StyledApp = styled.div`
  font-family: ${font('primary', 0)};
  
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
    color: ${palette('primary', 2)}
  }
  
  .logo {
    width: 2rem;
  }

  .container {
  padding-right: 32px;
  padding-left: 32px; }
  @media only screen and (min-width: 321px) {
    .container {
      padding-right: 56px;
      padding-left: 56px; } }
  @media only screen and (min-width: 768px) {
    .container {
      padding-right: 0;
      padding-left: 0;
      margin: 0 auto;
      width: 656px; } }
  @media only screen and (min-width: 1024px) {
    .container {
      width: 936px; } }
  @media only screen and (min-width: 1272px) {
    .container {
      width: 1032px; } }
  @media only screen and (min-width: 1512px) {
    .container {
      width: 1128px; } }


`;

export default StyledApp;