import React from 'react';
import { CardTranslation, CardPhrase, CardInner, CardContainer, CardFront, CardBack, CardImage } from './style';

interface CardProps {
    imagem: any,
    frase: String,
    traducao: String,
    
}

export const Card = ( {imagem, frase, traducao}:CardProps ) => {

    console.log('imagem:   ', imagem)

    return(
        <CardContainer>
            <CardInner>
                <CardFront>
                    <CardImage src={imagem}/>
                </CardFront>
                <CardBack>
                    <CardPhrase>
                    {frase}
                    </CardPhrase>
                    <CardTranslation>
                        {traducao}
                    </CardTranslation>
                </CardBack>
            </CardInner>
        </CardContainer>

    )
}