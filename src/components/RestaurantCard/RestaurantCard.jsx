import React from "react";
import { Container, Info } from "./styles";

const RestaurantCard = (props) => {
    return (
        <Container>
            <img src={props.logo} alt={props.name} />
            <Info>
                <span id="name">{props.name}</span>
                <div>
                    <span>{props.time - 10} - {props.time} min</span>
                    <span>Frete R$ {props.shipping.toFixed(2)}</span>
                </div>
            </Info>
        </Container>
    )
}

export default RestaurantCard