import styled from "styled-components";

export const Wrapper = styled.div`
  text-align:center;
  background: #fff;
  line-height: 1.2;
  padding:80px 0;
  h2 {
    font-size: 48px;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  p{
    margin-bottom: 0.5rem;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    color: #000;
  }
  button{
    background-color: #00BF6F;
    color: #fff;
    min-width: 280px;
    cursor: pointer;
    border-radius: 50px;
    border:1px solid #00BF6F;
    padding:15px;
    &:hover{
        background-color: #029959;
    }
  }
`;
