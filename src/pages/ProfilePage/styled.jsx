import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
export const Bar = styled.div`
  width: 360px;
  height: 64px;
  margin: 0 0 16px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 var(--black-25);
  background-color: #fff;
`;
export const Title = styled.h3`
  width: 68px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
  width: 175px;
  height: 44px;
  margin: 20px 92px 0 93px;
`;

export const Name = styled.p`
  width: 328px;
  height: 18px;
  margin: 16px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`;

export const Email = styled.p`
  width: 328px;
  height: 18px;
  margin: 2px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`;
export const Span = styled.span`
  width: 328px;
  height: 18px;
  margin: 8px 16px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`;
export const Rectangle = styled.div`
  width: 360px;
  height: 76px;
  margin: 16px 0;
  padding: 16px;
  background-color: #eee;
`;

export const EditDados = styled.img`
  width: 24px;
  height: 24px;
  margin: 16px 16px 2px 320px;
  object-fit: contain;
`;
