import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: url('https://images.unsplash.com/photo-1619551734325-81aaf323686c?auto=format&fit=crop&q=80') center/cover no-repeat;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;

  h1 {
    font-size: 4rem;
    margin-bottom: 20px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    
    span {
      color: #00a8ff;
    }
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 40px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    line-height: 1.6;
  }
`;

const CallToAction = styled.button`
  padding: 18px 40px;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  background: linear-gradient(45deg, #00a8ff 0%, #0097e6 100%);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,168,255,0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,168,255,0.4);
    background: linear-gradient(45deg, #0097e6 0%, #00a8ff 100%);
  }
`;

const FloatingShape = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  left: 0;
  background: linear-gradient(to top left, #fff 49%, transparent 50%);
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <h1>Películas de <span>Alta Performance</span></h1>
        <p>Transforme seu veículo com proteção premium e estilo incomparável. 
           Tecnologia avançada para máxima durabilidade e conforto.</p>
        <CallToAction onClick={() => window.location.href='/contato'}>
          Solicitar Orçamento
        </CallToAction>
      </HeroContent>
      <FloatingShape />
    </HeroSection>
  );
};

export default Hero;