import styled, { css } from 'styled-components';

export const CardImage = styled.img`
    height: 300px;
    width: 450px;
    border-radius: 16px;
    z-index: 3;

    @media screen and (max-width: 768px) {
        height: 200px;
        width: 300px;
    }
`;

export const CardInner = styled.div`
  position: relative;
  height: 300px;
  width: 450px;
  text-align: center;
  z-index: 3;
  transition: transform 0.4s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    height: 200px;
    width: 300px;
  }
`;

export const CardContainer = styled.div`
  background-color: transparent;
  height: 300px;
  border-radius: 16px;
  z-index: 3;
  width: 450px;
  perspective: 1000px;

  ${CardInner}:hover {
    transform: rotateY(180deg);
  }

  @media screen and (max-width: 768px) {
    height: 200px;
    width: 300px;
  }
`;

export const absoluteStyle = css`
  position: absolute;
  height: 300px;
  width: 450px;
  z-index: 3;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  @media screen and (max-width: 768px) {
    height: 200px;
    width: 300px;
  }
`;

export const CardFront = styled.div`
    height: 300px;
    border-radius: 16px;
    width: 450px;
    ${absoluteStyle}
    @media screen and (max-width: 768px) {
      height: 200px;
      width: 300px;
    }
`;

export const CardBack = styled.div`
  display: flex;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  background-color: #A3B8D7;
  color: black;
  transform: rotateY(180deg);
  ${absoluteStyle}
  @media screen and (max-width: 768px) {
    height: 200px;
    width: 300px;
  }
`;

export const CardPhrase = styled.p`
  font-size: 16px;
  font-weight: bold;
  `;

  export const CardTranslation = styled.p`
  font-size: 16px;
  `;