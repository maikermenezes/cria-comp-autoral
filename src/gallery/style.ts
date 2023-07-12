import styled, { keyframes, css } from 'styled-components';



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

export const Verso = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-width: 300px;
    height: 300px;
    background-color: white;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0 2rem;
    &focus {
        opacity: 1;
    }
`;

// Animation to flip the card

const flipCard = keyframes`
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(180deg);
    }
`;


export const GalleryItem = styled.img`

    height: 300px;
    width: 450px;
    border-radius: 16px;
    z-index: 3;
`;

export const GalleryCard = styled.div`
    height: 300px;
    min-width: 300px;
    z-index: 3;
    transform-style: preserve-3d;
    transition: .5s linear;
    position: relative;    

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




export const CardInner = styled.div`
  position: relative;
  height: 300px;
  width: 450px;
  text-align: center;
  transition: transform 0.4s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const Card = styled.div`
  background-color: transparent;
  height: 300px;
  width: 450px;
  perspective: 1000px;

  ${CardInner}:hover {
    transform: rotateY(180deg);
  }
`;

export const absoluteStyle = css`
  position: absolute;
  height: 300px;
  width: 450px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const CardFront = styled.div`
height: 300px;
width: 450px;
${absoluteStyle}
`;

export const CardBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #A3B8D7;
  color: black;
  transform: rotateY(180deg);
  ${absoluteStyle}
`;