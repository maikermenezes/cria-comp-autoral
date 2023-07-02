import React from 'react';

import { BannerContainer, BannerTitle, BannerDescription, BannerButton } from './style';

export const Banner = () => {
    return (
        <BannerContainer>
            <BannerTitle>Projeto Autoral</BannerTitle>
            <BannerDescription>Este projeto consta e uma galeria com diversos quadrinhos criados utilizando dos modelos X, Y e Z</BannerDescription>
            <BannerButton>Acesse nosso repositório</BannerButton>
        </BannerContainer>
    );
}