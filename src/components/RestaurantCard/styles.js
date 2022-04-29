import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid var(--black-25);
    border-radius: 10px;
    margin: 0 0 10px;

    img {
        height: 120px;
        width: 100%;
        object-fit: cover;
        border-radius: 8px 8px 0px 0px;
    }
`

export const Info = styled.div`
    padding: 10px 15px;

    #name {
        color: var(--green);
        font-weight: 400;
    }

    span {
        color: var(--black-25);
        font-weight: 500;
    }

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 5px 0px;
    }
`