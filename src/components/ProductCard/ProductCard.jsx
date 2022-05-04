import React from "react"
import { Button, Container, Info } from "./styles"

const ProductCard = (props) => {
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
                <Button>Adicionar</Button>
            </Info>
        </Container>
    )
}

export default ProductCard