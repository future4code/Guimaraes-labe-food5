import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 20vh;
  border: 1px solid gray;
  width: 90vw;
  justify-content: space-between;
  margin: 10px;
`;

export const ItemImage = styled.img`
  height: 100px;
  width: 100px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameText = styled.h2`
  margin: 10px;
`;
