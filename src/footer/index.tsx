import React from 'react';

import { FooterContainer, FooterTitle, FooterInternalContainer, FooterDescription } from './style';

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterInternalContainer>
                <FooterTitle>Hi, I'm a footer</FooterTitle>
                <FooterDescription>And I'm a description</FooterDescription>
            </FooterInternalContainer>
        </FooterContainer>
    );
}
