import React, { useState } from 'react';
import logwood from "../assets/logwood3.png";
import { GalleryGridContainer, GalleryGridExternalContainer, GalleryContainer, GalleryTitle, GalleryDescription } from './style';
import { Card } from './Card'

export const Gallery = () => {

    const cardList = [
        {
            image: 'https://drive.google.com/uc?id=1k3_XiNISY-Y3u7bXm8blo5jjK68AC23M',
            phrase: 'teste frase 1'
        },
        {
            image: 'https://drive.google.com/uc?id=1k3_XiNISY-Y3u7bXm8blo5jjK68AC23M',
            phrase: 'teste aleatório frase 2'
        },
        {
            image: 'https://drive.google.com/uc?id=1k3_XiNISY-Y3u7bXm8blo5jjK68AC23M',
            phrase: 'teste aleatório frase 3'
        },
        {
            image: 'https://drive.google.com/uc?id=1k3_XiNISY-Y3u7bXm8blo5jjK68AC23M',
            phrase: 'teste frase 1'
        },
        {
            image: 'https://drive.google.com/uc?id=1k3_XiNISY-Y3u7bXm8blo5jjK68AC23M',
            phrase: 'teste aleatório frase 2'
        },
        {
            image: 'https://drive.google.com/uc?id=1k3_XiNISY-Y3u7bXm8blo5jjK68AC23M',
            phrase: 'teste aleatório frase 3'
        },
        {
            image: 'https://drive.google.com/uc?id=1k3_XiNISY-Y3u7bXm8blo5jjK68AC23M',
            phrase: 'teste frase 1'
        },
        {
            image: 'https://drive.google.com/uc?id=1k3_XiNISY-Y3u7bXm8blo5jjK68AC23M',
            phrase: 'teste aleatório frase 2'
        },
        {
            image: 'https://drive.google.com/uc?id=1k3_XiNISY-Y3u7bXm8blo5jjK68AC23M',
            phrase: 'teste aleatório frase 3'
        },
        {
            image: 'https://drive.google.com/uc?id=1k3_XiNISY-Y3u7bXm8blo5jjK68AC23M',
            phrase: 'teste frase 1'
        },
        {
            image: 'https://drive.google.com/uc?id=1k3_XiNISY-Y3u7bXm8blo5jjK68AC23M',
            phrase: 'teste aleatório frase 2'
        },
        {
            image: 'https://drive.google.com/uc?id=1k3_XiNISY-Y3u7bXm8blo5jjK68AC23M',
            phrase: 'teste aleatório frase 3'
        },
    ]

    return (
        <GalleryContainer>
            <GalleryTitle>Galeria</GalleryTitle>
            <GalleryDescription>Flash cards criados pela equipe</GalleryDescription>
            <GalleryGridExternalContainer>
                <GalleryGridContainer>

                {cardList.map((item) => {
                   return <Card imagem={item.image} frase={item.phrase} />
                })}

                </GalleryGridContainer>
            </GalleryGridExternalContainer>
        </GalleryContainer>
    );
}