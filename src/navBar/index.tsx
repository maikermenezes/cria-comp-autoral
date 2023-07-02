import React from 'react';
import logo from '../logo.svg';
import { Container ,NavBarContainer, LogoContainer, Logo, NavBarItems, NavBarLink } from './style';

export const NavBar = () => {
    return (
        <Container>
            <NavBarContainer>
                <LogoContainer>
                        <Logo src={logo} alt="logo" />
                    </LogoContainer>
                    <NavBarItems>
                        <NavBarLink href="#">Home</NavBarLink>
                        <NavBarLink href="https://github.com/maikermenezes/cria-comp-autoral" target="_blanc" >Repositório</NavBarLink>
                        <NavBarLink href="#">Integrantes</NavBarLink>
                    </NavBarItems>
            </NavBarContainer>
        </Container>
    );
}