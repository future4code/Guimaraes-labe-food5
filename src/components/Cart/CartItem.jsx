import React from "react";
import {
  ItemContainer,
  ItemImage,
  TextContainer,
  NameText,
} from "./styledCartItem";
const CartItem = (props) => {
  const { name, price, photos, amount } = props.product;

  return (
    <ItemContainer>
      <ItemImage alt={name} src={photos} />
      <TextContainer>
        <NameText>{name}</NameText>
        <p>
          R$ {price} <b>x {amount}</b>
        </p>
      </TextContainer>
      <button onClick={() => props.removeItemFromCart(props.product)}>
        {" "}
        Remover
      </button>
    </ItemContainer>
  );
};
export default CartItem;
