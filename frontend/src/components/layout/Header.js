import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  box-shadow: ${props => props.isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease-in-out;
  padding: 1rem 0;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.isScrolled ? 'var(--primary-color)' : 'var(--white)'};
`;

const MenuItems = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(Link)`
  color: ${props => props.isScrolled ? 'var(--text-primary)' : 'var(--white)'};
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: var(--primary-color);
  }
`;

const ContactButton = styled(Link)`
  background: var(--primary-color);
  color: var(--white);
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background: #c41230;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Nav>
        <Logo to="/" isScrolled={isScrolled}>
          Art Film
        </Logo>
        <MenuItems>
          <MenuItem to="/" isScrolled={isScrolled}>Home</MenuItem>
          <MenuItem to="/servicos" isScrolled={isScrolled}>Serviços</MenuItem>
          <MenuItem to="/portfolio" isScrolled={isScrolled}>Portfólio</MenuItem>
          <MenuItem to="/sobre" isScrolled={isScrolled}>Sobre</MenuItem>
          <ContactButton to="/contato">Orçamento</ContactButton>
        </MenuItems>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;