import styled from 'styled-components';

export const CardContainer = styled.div `
    display: flex;
    justify-content: center;
    width: 250px;
    height: 300px;
    background: #51BDE2 ;
    border-radius: 25px;
    border: 5px solid black;
    margin: 10px;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    :hover {
        transform: scale(1.1);
`

export const CardWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CardDetails = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-family: sans-serif;

    h1 {
        font-size: 1rem;
        padding: 0px;
        margin: 10px;
    }

    p {
        font-size: 1rem;
        padding: 10px;
        margin: 0;
    }
`

export const CardImg = styled.div `
    padding: 25px;
`

