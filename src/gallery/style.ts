import styled from 'styled-components';

export const GalleryContainer = styled.div`
    background-color: transparent;
    min-height: 600px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px 0;
    gap: 8px;
`;
export const GalleryGridExternalContainer = styled.div`
    background-color: transparent;
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;

export const GalleryGridContainer = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 24px auto;
`;

export const GalleryTitle = styled.h1`  
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    margin: 0;
    z-index: 3;
`;

export const GalleryDescription = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    margin: 0;
    z-index: 3;
`;


export const GalleryItem = styled.img`
    height: 300px;
    min-width: 300px;
    border-radius: 16px;
    z-index: 3;
`;


// export const GalleryItem = styled.div`
//     background-color: #ffffff;
//     height: 40vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     padding: 0 2rem;
// `;

// export const GalleryImage = styled.img`
//     height: 200px;
//     width: 200px;
//     border-radius: 16px;
// `;


