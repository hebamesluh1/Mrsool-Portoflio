import styled from "styled-components";
import { Container } from "../../../global/component";

export const FullWrapped = styled.div`
width:100%;
// background:#000;
position:fixed;
z-index:1000000;
`

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:10px 0 ;
`;

export const Logo = styled.div`
img{
    width:100%;
    height:100%;
}
`;

export const Menu = styled.div`
  ul {
    display: flex;
    gap: 20px;
    list-style: none;
  }
  a{
    text-decoration:none;
    font-weight:500;
    color:#fff;
  }
  .active{
    border-bottom: 3px solid #00BF6F;
    border-radius: 2px;
    padding-bottom: 0;
  }
`;

export const Button = styled.div`
button{
    border-radius:50px;
    background:#f00;
    color:#fff;
    padding:8px 24px;
    border:1px solid #f00;
    font-size:1rem;
    font-weight:500;
    cursor:pointer;
}
`;
