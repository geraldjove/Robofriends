import React from 'react';
import Card from '../card/card.component';
import { CardListContainer, CardListWrapper, CardListContent } from './cardlist.styles.js';

const CardList = ({robots}) => {
    const cardArray = robots.map((users, i) => {
        return (
            <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
        )
    })

    return (
        <CardListContainer>
            <CardListWrapper>
                <CardListContent>
                    {cardArray}
                </CardListContent>
            </CardListWrapper>
        </CardListContainer>
    )
}

export default CardList
