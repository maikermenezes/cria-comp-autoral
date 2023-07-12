import React from 'react';
import logo from "../assets/opcao_final.png";

import { BannerInfoContainer, BannerImage ,NotionLink, BannerContainer, BannerTitle, BannerDescription, BannerButton } from './style';

export const Banner = () => {
    return (
        <BannerContainer>
            <BannerImage src={logo} />
            <BannerInfoContainer>
                <BannerTitle>Projeto Autoral Grupo 3</BannerTitle>
                <BannerDescription>Este site consta de uma galeria com diversas flash cards criados utilizando de modelos como Stable Diffusion, DALL-E 2 e Chat GPT</BannerDescription>
                <BannerButton>
                    <NotionLink href="https://royal-settee-903.notion.site/Documenta-o-56aaf176cf4f4793b0bbe0c603c8d278" target="_blanc"> 
                        Nossa documentação
                    </NotionLink>
                </BannerButton>
            </BannerInfoContainer>
        </BannerContainer>
    );
}