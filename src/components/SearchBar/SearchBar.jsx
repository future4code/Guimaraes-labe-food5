import React from "react"
import { Container, Input } from "./styled"
import search from '../../images/search.svg'

const SearchBar = () => {
    return (
        <Container>
            <img src={search} alt="Pesquisar" />
            <Input
                placeholder="Restaurante"
            />
        </Container>
    )
}

export default SearchBar