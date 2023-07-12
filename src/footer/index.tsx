import React from 'react';
import cinLogo from '../assets/cin-logo.png';

import { FooterContainer, FooterTitle, FooterInternalContainer, FooterImage } from './style';

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterInternalContainer>
                <FooterTitle>Criatividade Computacional - CIn UFPE</FooterTitle>
                <FooterImage src={cinLogo} />
            </FooterInternalContainer>
        </FooterContainer>
    );
}
