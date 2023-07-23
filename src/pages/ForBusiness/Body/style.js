import styled from "styled-components";

export const WrapperBox = styled.div`
  display: flex;
  .text-section {
    flex-basis: 50%;
    padding:80px 100px;
    h3{
        font-size: 2rem;
        font-weight:500;
        line-height: 1.2;
        margin-bottom: .5rem;
    }
    p{
        text-align: left;
        line-height: 1.5;
        font-size: 16px;
    }
  }
  .background-section {
    flex-basis: 50%;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    font-size: 230px;
    color: #ffffff;
    text-align:center;
    padding:20px;
  }
`;
