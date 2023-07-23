import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url("https://mrsool.co/images/home-cta.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  position: relative;
  height: 332px;
  width: 100%;
  color:#fff;
  text-align:center;
  font-size: 28px;
  padding:40px 0;
  h2{
    font-size: 48px;
    font-weight: 500;
  }
  button{
    background-color: #FFCD00;
    color: #000;
    white-space: normal;
    padding: 8px 40px;
    margin-top: 40px;
    font-size:1rem;
    border-radius:50px;
    border:1px solid #ffcd00;
    cursor:pointer;
    &:hover{
        background:#c9a100;
        border:1px solid #c9a100;
    }
  }
`;
