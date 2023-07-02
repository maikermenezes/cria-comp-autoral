import styled from "styled-components";
import logwood from "../assets/logwood3.png";

export const BannerContainer = styled.div`
    background: url(${logwood}) ;
    background-size: cover;
    width: 100%;
    height: 720px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    gap: 32px;
`;

export const BannerTitle = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    margin: 0;
`;

export const BannerDescription = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #FFDBBB;
    width: 450px;
    margin: 0;
    text-align: center;
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
`;


