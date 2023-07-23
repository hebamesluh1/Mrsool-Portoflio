import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  line-height: 1.2;
  padding-top:40px;
  h2 {
    font-size: 48px;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  p{
    min-height: 1px;
    max-width: 700px;
    margin: auto;
  }
  h3{
    font-size: 48px;
    font-weight: 500;
    margin: 30px auto;
    color: #000;
  }
`;
export const Cards = styled.div`
  display: flex;
  margin-top:50px;
  justify-content:center;
  gap:40px;
  padding-bottom:20px;
  border-bottom:1px solid #eee;
`;
