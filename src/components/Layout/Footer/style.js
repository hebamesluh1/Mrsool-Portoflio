import styled from "styled-components";
import { Container } from "../../../global/component";

export const FullWrapped = styled.div`
  width: 100%;
  background: #000;
  color: #fff;
  padding-top: 3rem;
`;
export const Wrapper = styled(Container)`
  color: #fff;
  display: flex;
  justify-content: space-between;
`;
export const List = styled.div`
  h6 {
    color: #d1d3d4;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    margin: 1rem 0;
  }
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 12px;
  }
  a {
    font-size: 16px;
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #00bf6f;
    }
  }
  .custom-icon {
    color: #00bf6f;
    margin-right: 20px;
  }
  .social {
    display: flex;
    justify-content: center;
    div {
      width: 40px;
    }
  }
`;
export const Down = styled.div`
  border-top: .5px solid #eee;
  padding: 20px 0;
`;
