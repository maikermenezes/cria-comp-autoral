import React, { useState } from 'react';
import logwood from "../assets/logwood3.png";
import { GalleryGridContainer, GalleryGridExternalContainer, GalleryContainer, GalleryTitle, GalleryDescription } from './style';
import { Card } from './Card'
import { cardList } from'../object'

export const Gallery = () => {

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