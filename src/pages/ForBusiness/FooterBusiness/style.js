import styled from "styled-components";
import { Container } from "../../../global/component";

export const Wrapper = styled.div`
  background-image: url(https://mrsool.co/images/business-bottom-bg.png);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  padding: 50px;
  text-align: center;
  button {
    white-space: normal;
    padding: 12px 30px;
    background-color: #00bf6f;
    color: #fff;
    border-radius: 50px;
    border: none;
    margin-top: 20px;
    cursor: pointer;
  }
`;
export const CardWrapped = styled(Container)`
  display: flex;
  justify-content: center;
  gap: 10%;
  border-top:1px solid #eee;
padding-top:50px;
`;
