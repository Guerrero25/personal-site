import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin: 0 0 2em;
`;

export const Label = styled.label`
  position: absolute;
  top: 1em;
  left: 15px;
  color: ${({ theme }) => theme.colors.gray};
  transition: 0.3s;
`;

export const InputBase = styled.input`
  position: relative;
  border: 2px solid #999;
  border-radius: 5px;
  display: block;
  font-size: 1em;
  line-height: 1.4;
  margin: 0;
  padding: 10px 25px 10px 12px;
  width: 100%;
  background: 0 0;
  background-color: transparent;
  text-align: left;
  color: inherit;
  outline: none;
  font-family: Poppins, Helvetica, sans-serif;
  box-shadow: 0 10px 10px -8px rgba(0, 0, 0, 0.1);

  ::placeholder {
    color: transparent;
  }

  :not(:placeholder-shown) ~ ${Label} {
    color: ${({ theme }) => theme.colors.primary};
    top: -1.25em;
    left: 0;
    z-index: 1;
    font-size: 13px;
  }
`;
