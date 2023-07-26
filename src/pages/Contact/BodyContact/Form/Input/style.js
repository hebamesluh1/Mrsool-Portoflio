import styled from "styled-components";

export const Box = styled.div`
  margin-bottom: 1rem;
  textarea{
    background-color: #fcfcfc;
    border: 1px solid #ededed;
    display:block;
    width:100%;
    resize:none;
  }
`;
export const Inputt = styled.input`
  background-color: #fcfcfc;
  border: 1px solid #ededed;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  outline:none;
  &:focus {
    border: 1px solid #00BF6F;
  }
`;
export const Label = styled.label`
  line-height: 1.5;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 0.5rem;
`;
