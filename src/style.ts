import styled from "styled-components";

export const MainContainer = styled.div`
background-color: #222021;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
overflow-x: hidden;
overflow-y: auto;
position: relative;
`;

export const BackgroundImg = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
z-index: 2;
`;


