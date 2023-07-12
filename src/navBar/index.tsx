import React from 'react';
import logo from '../assets/flashi_redondo.png';
import { Container ,NavBarContainer, LogoContainer, Logo, NavBarItems, NavBarLink } from './style';

export const NavBar = () => {
    return (
        <Container>
            <NavBarContainer>
                <LogoContainer>
                        <Logo src={logo} alt="logo" />
                    </LogoContainer>
                    <NavBarItems>
                        <NavBarLink href="https://github.com/maikermenezes/cria-comp-autoral" target="_blanc" >Repositório</NavBarLink>
                        <NavBarLink href="#">Integrantes</NavBarLink>
                    </NavBarItems>
            </NavBarContainer>
        </Container>
    );
}