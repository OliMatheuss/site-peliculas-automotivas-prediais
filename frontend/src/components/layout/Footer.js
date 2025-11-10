import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: var(--white);
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: var(--white);
    transition: color 0.3s;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: 1rem;
  
  p {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    
    svg {
      margin-right: 0.5rem;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Art Film</h3>
          <p>Especialistas em películas automotivas e arquitetônicas, oferecendo soluções de alta qualidade para proteção e conforto.</p>
        </FooterSection>

        <FooterSection>
          <h3>Links Rápidos</h3>
          <ul>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/portfolio">Portfólio</Link></li>
            <li><Link to="/sobre">Sobre Nós</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Serviços</h3>
          <ul>
            <li><Link to="/servicos/automotivo">Películas Automotivas</Link></li>
            <li><Link to="/servicos/predial">Películas Prediais</Link></li>
            <li><Link to="/servicos/decorativa">Películas Decorativas</Link></li>
            <li><Link to="/servicos/seguranca">Películas de Segurança</Link></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Contato</h3>
          <ContactInfo>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              São Paulo, SP
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              (11) 99999-9999
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              contato@artfilm.com.br
            </p>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} Art Film. Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;