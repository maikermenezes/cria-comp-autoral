import styled from "styled-components";
import logo from "../assets/opcao_final.png";

export const BannerContainer = styled.div`
    width: 100%;
    height: 720px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 0 4rem;
    gap: 32px;
    z-index: 3;
`;

export const BannerInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    gap: 32px;
`;

export const BannerImage = styled.img`
    max-width: 500px;
    z-index: 0;

    @media screen and (max-width: 768px) {
        max-width: 300px;
    }
`;

export const BannerTitle = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    margin: 0;
    text-align: center;
    z-index: 3;
    @media screen and (max-width: 768px) {
        width: 300px;
    }
`;

export const BannerDescription = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #FFDBBB;
    max-width: 450px;
    margin: 0;
    text-align: center;
    z-index: 3;
`;

export const BannerButton = styled.button`
    background-color: #A3B8D7;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 400;
    padding: 1rem 2rem;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    z-index: 3;
`;

export const NotionLink = styled.a`
    color: #fff;
    text-decoration: none;
    `;

