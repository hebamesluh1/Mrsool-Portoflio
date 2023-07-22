import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  @media (max-width: 576px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    width: 540px;
  }

  /* 768px  */
  @media (max-width: 768px) {
    width: 720px;
  }

  /* 992px  */
  @media (max-width: 992px) {
    width: 960px;
  }

  /* 1200px  */
  @media (max-width: 1200px) {
    width: 1140px;
  }
  /* 1400px  */
  @media (min-width: 1400px) {
    width: 1320px;
  }
`;
