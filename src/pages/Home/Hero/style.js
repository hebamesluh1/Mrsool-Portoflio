import styled from "styled-components";

export const Container1 = styled.div`
  height: 600px;
`;
export const ContainerVideo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .overlay {
    position: absolute;
    width: 100%;
    height: 600px;
    background: #000000bf;
    z-index: 500;
    object-fit: cover;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
  }
`;
export const Content = styled.div`
  position: absolute;
  top: 0;
  z-index: 1223;
  text-align: left;
  color: #fff;
  margin-top: 150px;
  width: 730px;
  h1 {
    font-size: 72px;
    font-weight: 300;
    line-height: 1.2;
    margin-bottom:50px;
  }
  .stores{
    display:flex;
    gap:20px;
  }
  a{
    max-width: 200px;
  }
  img {
    width: 200px;
    height: 60px;
  }
`;
