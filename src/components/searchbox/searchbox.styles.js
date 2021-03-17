import styled from 'styled-components';

export const SearchBoxContainer = styled.div `
display: flex;
width: 100%;
max-width: 100vw;
justify-content: center;
align-items: center;
`

export const SearchBoxWrapper = styled.div `
display: flex;
justify-content: center;
align-items: center;
padding: 25px;
`

export const SearchInput = styled.input `
width: 500px;
padding: 15px;
border-radius: 10px;
border: none;
transition: ease all .5s;
:focus {
    outline: none;
}

@media screen and (max-width: 720px) {
    width: 250px;
}
`

export const SearchBtn = styled.button `
width: 100px;
height: 50px;
margin-left: 1rem;
border-radius: 10px;
border: none;
transition: all .2s ease-in-out;
cursor: pointer;

:active {
    transform: scale(0.9)
}

:focus {
    outline: none;
}
`