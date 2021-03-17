import React from 'react'
import { SearchBoxContainer, SearchBoxWrapper, SearchInput, SearchBtn } from './searchbox.styles';

const SearchBox = ({searchChange, clickChange}) => {

    return (
        <>
            <SearchBoxContainer>
                <SearchBoxWrapper>
                    <SearchInput placeholder="search..." onChange={searchChange}/>
                    <SearchBtn onClick={clickChange}>Search</SearchBtn>
                </SearchBoxWrapper>
            </SearchBoxContainer>
        </>
    )
}

export default SearchBox
