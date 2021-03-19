import React from 'react'
import { SearchBoxContainer, SearchBoxWrapper, SearchInput, SearchBtn } from './searchbox.styles';

const SearchBox = ({searchChange, onClickChange}) => {

    return (
        <>
            <SearchBoxContainer>
                <SearchBoxWrapper>
                    <SearchInput placeholder="search..." onChange={searchChange}/>
                    <SearchBtn onClick={onClickChange}>Search</SearchBtn>
                </SearchBoxWrapper>
            </SearchBoxContainer>
        </>
    )
}

export default SearchBox
