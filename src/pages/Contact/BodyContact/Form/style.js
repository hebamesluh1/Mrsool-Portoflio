import styled from "styled-components";

export const FormStyle = styled.div`
  background-color: #ffffff;
  box-shadow: 0 16px 32px rgb(0 0 0 / 20%);
  padding: 55px 10px 15px;
  border-radius: 5px;
  margin-top: -120px;
  .group {
    display: flex;
    .inputs {
      flex-basis: 50%;
    }
    .imgSection {
      flex-basis: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export const Btns = styled.div`
  text-align: right;
  .cancel-btn {
    color: #a7a9ac;
    font-weight: 500;
    background-color: #f8f9fa;
    padding: 8px 30px;
    border: 1px solid #fff;
    cursor: pointer;
    border-radius: 0.25rem;
    &:hover {
      background: #a7a9ac;
      border-color: #a7a9ac;
      color: #000;
    }
    margin-right: 10px;
  }
  .send-btn {
    padding: 8px 30px;
    border: 1px solid #fff;
    cursor: pointer;
    border-radius: 0.25rem;
    background-color: #00bf6f;
    color: #fff;
    &:hover {
      background: #027545;
      border-color: #027545;
    }
  }
`;
