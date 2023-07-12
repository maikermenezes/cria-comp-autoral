import React from 'react';
import logo from "../assets/opcao_final.png";

import { BannerImage ,NotionLink, BannerContainer, BannerTitle, BannerDescription, BannerButton } from './style';

export const Banner = () => {
    return (
        <BannerContainer>
            <BannerImage src={logo} />
            <BannerTitle>Projeto Autoral Grupo 3</BannerTitle>
            <BannerDescription>Este projeto consta e uma galeria com diversos quadrinhos criados utilizando dos modelos X, Y e Z</BannerDescription>
            <BannerButton>
                <NotionLink href="https://www.notion.so/Grupo-3-c240db2ff232432c83b1e1a961f73802?pvs=4"> 
                    Nossa documentação
                </NotionLink>
            </BannerButton>
        </BannerContainer>
    );
}