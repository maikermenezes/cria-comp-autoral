import styled from 'styled-components';

export const NavBarContainer = styled.div`
    background-color: transparent;
    height: 10vh;
    display: flex;
    flex-direction: row;    
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 1rem 40px 1rem 1rem;
    z-index: 3;
`;

export const Container = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    top: 0;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    height: 5rem;
    width: 5rem;
    z-index: 3;

`;

export const NavBarItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    justify-content: center;
`;

export const NavBarLink = styled.a`
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
`;

