import styled from 'styled-components';

export const FooterContainer = styled.div`
    background-color: #222021;
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    box-shadow: 0px -8px 20px 2px rgba(250,250,250,0.1);
    z-index: 3;
`;

export const FooterInternalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    justify-content: center;
`;

export const FooterTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    @media screen and (max-width: 768px) {
        font-size: 20px;
        text-align: center;
        flex-wrap: wrap;
    }
`;

export const FooterImage = styled.img`
    width: 100px;
`;








