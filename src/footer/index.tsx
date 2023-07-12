import React from 'react';

import { FooterContainer, FooterTitle, FooterInternalContainer, FooterDescription } from './style';

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterInternalContainer>
                <FooterTitle>Criatividade Computacional - CIn UFPE</FooterTitle>
                <FooterDescription></FooterDescription>
            </FooterInternalContainer>
        </FooterContainer>
    );
}
