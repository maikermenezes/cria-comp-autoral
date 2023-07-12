import React from 'react';
import logo from "../assets/opcao_final.png";

import { BannerInfoContainer, BannerImage ,NotionLink, BannerContainer, BannerTitle, BannerDescription, BannerButton } from './style';

export const Banner = () => {
    return (
        <BannerContainer>
            <BannerImage src={logo} />
            <BannerInfoContainer>
                <BannerTitle>Projeto Autoral Grupo 3</BannerTitle>
                <BannerDescription>Este site consta de uma galeria com diversas flash cards criados utilizando dos modelos X, Y e Z</BannerDescription>
                <BannerButton>
                    <NotionLink href="https://www.notion.so/Grupo-3-c240db2ff232432c83b1e1a961f73802?pvs=4"> 
                        Nossa documentação
                    </NotionLink>
                </BannerButton>
            </BannerInfoContainer>
        </BannerContainer>
    );
}