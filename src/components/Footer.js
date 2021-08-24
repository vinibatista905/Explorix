// <========== IMPORTS ==========>
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';


// <========== COMPONENT ==========>

function Footer() {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
            <FooterDesc>
                <h1>Explorix</h1>
                <p>Nos esforçamos para criar a melhor experiência para nossos clientes</p>
            </FooterDesc>
            <FooterLinkItems>
                <FooterLinkTitle>Nos Contate</FooterLinkTitle>
                <FooterLink to='/about'>Contato</FooterLink>
                <FooterLink to='/'>Suporte</FooterLink>
                <FooterLink to='/'>Destinos</FooterLink>
                <FooterLink to='/'>Patrocínios</FooterLink>
            </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>Vídeos</FooterLinkTitle>
                <FooterLink to='/'>Enviar Vídeo</FooterLink>
                <FooterLink to='/'>Embaixadores</FooterLink>
                <FooterLink to='/'>Agências</FooterLink>
                <FooterLink to='/'>Influenciadores</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
                <FooterLinkTitle>Mídias Sociais</FooterLinkTitle>
                <FooterLink to='/'>Instagram</FooterLink>
                <FooterLink to='/'>Facebook</FooterLink>
                <FooterLink to='/'>Youtube</FooterLink>
                <FooterLink to='/'>Twitter</FooterLink>
            </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer


// <========== STYLES ==========>

const FooterContainer = styled.div`
padding: 5rem calc((100vw - 1100px) /2);
display: grid;
grid-template-columns: repeat(2, 1fr);
color: #000;
background: #fafafb;

`;

const FooterDesc = styled.div`
padding: 0 2rem;

h1{
    margin-bottom: 3rem;
    color: #f26a2e;

    @media screen and (max-width: 400px){
        padding: 1rem;
    }
}

`;

const FooterLinksWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);

@media screen and (max-width: 820px){
    grid-template-columns: 1fr;
}

`;

const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1rem 2rem;

@media screen and (max-width: 400px) {
    padding: 1rem;
}

`;

const FooterLinkTitle = styled.h2`
font-size: 15px;
margin-bottom: 16px;

`;

const FooterLink = styled(Link)`
text-decoration: none;
margin-bottom: 0%.5rem;
font-size: 14px;
color: #3d3d4e;

&:hover{
    color: #f26a2e;
    transition: 0.3s ease-out;
}

`;
