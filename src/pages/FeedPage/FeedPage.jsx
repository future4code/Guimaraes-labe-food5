import React from "react"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard.jsx"
import SearchBar from "../../components/SearchBar/SearchBar.jsx"
import { RestaurantDisplay, Span, Tags } from "./styled"
import Container from "../../components/MainContainer/styled.js"

const FeedPage = () => {
    return (
        <Container>
            <SearchBar />

            <Tags>
                <div>
                    <Span active={true}>Burger</Span>
                </div>
                <div>
                    <Span active={false}>Asiática</Span>
                </div>
                <div>
                    <Span active={false}>Massas</Span>
                </div>
                <div>
                    <Span active={false}>Saudável</Span>
                </div>
            </Tags>

            <RestaurantDisplay>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </RestaurantDisplay>
        </Container>
    )
}

export default FeedPage