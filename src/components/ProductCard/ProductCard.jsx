import React, { useContext } from "react";
import { Button, Container, Info } from "./styles";
import GlobalStateContext from "../../global/GlobalStateContext";
const ProductCard = (props) => {
  const { states, setters, requests, services } =
    useContext(GlobalStateContext);
  const { cart } = states;
  const { setCart } = setters;
  //const { addToCart } = requests;

  const addItemToCart = (newItem) => {
    //função com lógica de quantidade
    const index = cart.findIndex((i) => i.id === newItem.id);
    const newCart = [...cart];
    if (index === -1) {
      const cartItem = { ...newItem, amount: 1 };
      newCart.push(cartItem);
    } else {
      //produto já está no carrinho
      newCart[index].amount = newCart[index].amount + 1;
    }
    setCart(newCart);
  };
  return (
    <Container>
      <picture>
        <img src={props.img} alt={props.name} />
      </picture>
      <Info>
        <div>
          <p>{props.name}</p>
          <span>{props.description}</span>
        </div>
        <p id="price">R$ {props.price.toFixed(2)}</p>
        <Button
          onClick={() => {
            addItemToCart(props.item); //Não consigo emitir alert e saber se o botão funciona

            alert("Produto adicionado ao carrinho!");
          }}
        >
          Adicionar
        </Button>
      </Info>
    </Container>
  );
};

export default ProductCard;
