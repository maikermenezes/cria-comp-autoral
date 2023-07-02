import React from 'react';
import logwood from "../assets/logwood3.png";
import { GalleryGridContainer, GalleryGridExternalContainer, GalleryContainer, GalleryTitle, GalleryDescription, GalleryItem } from './style';

export const Gallery = () => {
    return (
        <GalleryContainer>
            <GalleryTitle>Galeria</GalleryTitle>
            <GalleryDescription>Quadrinhos criados pela equipe</GalleryDescription>
            <GalleryGridExternalContainer>
                <GalleryGridContainer>
                    <GalleryItem src={logwood}/>
                    <GalleryItem src={logwood}/>
                    <GalleryItem src={logwood}/>
                    <GalleryItem src={logwood}/>
                    <GalleryItem src={logwood}/>
                    <GalleryItem src={logwood}/>
                    <GalleryItem src={logwood}/>
                    <GalleryItem src={logwood}/>
                    <GalleryItem src={logwood}/>
                    <GalleryItem src={logwood}/>
                    <GalleryItem src={logwood}/>
                    <GalleryItem src={logwood}/>
                    <GalleryItem src={logwood}/>
                    <GalleryItem src={logwood}/>
                    <GalleryItem src={logwood}/>
                    <GalleryItem src={logwood}/>
                </GalleryGridContainer>
            </GalleryGridExternalContainer>
        </GalleryContainer>
    );
}