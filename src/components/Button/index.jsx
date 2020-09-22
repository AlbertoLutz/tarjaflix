import styled from 'styled-components';

const Button =  styled.button `
  color: var(--white);
  background-color: black;
  border: 1px solid var(--backEnd);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition:  .3s;
  &:hover,
  &:focus {
   background-color: var(--purple);
}

`;

export default Button;