import React from 'react';
import { CardContainer, CardWrapper, CardDetails, CardImg } from './card.styles.js';
const Card = ({name, id, email}) => {
    return (

        <CardContainer>
            <CardWrapper>
                <CardImg><img src={`https://robohash.org/${id}?size=150x150`} alt=""></img></CardImg>
                <CardDetails>
                    <h1>{name}</h1>
                    <p>{email}</p>
                </CardDetails>
            </CardWrapper>
        </CardContainer>
    )
}

export default Card
