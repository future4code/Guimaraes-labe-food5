import React from "react";
import { Container, Info } from "./styles";

const RestaurantCard = () => {
    return (
        <Container>
            <img src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/7310808B-889E-450E-B76E-883261DC695C.png" alt="Restaurante" />
            <Info>
                <span id="name">Vinil Butantã</span>
                <div>
                    <span>50 - 60 min</span>
                    <span>Frete R$ 6,00</span>
                </div>
            </Info>
        </Container>
    )
}

export default RestaurantCard