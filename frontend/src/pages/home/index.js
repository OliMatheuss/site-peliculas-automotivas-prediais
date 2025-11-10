import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/sections/Hero';
import Services from '../../components/sections/Services';
import Benefits from '../../components/sections/Benefits';
import Portfolio from '../../components/sections/Portfolio';

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const HomePage = () => {
  return (
    <Container>
      <Hero />
      <Services />
      <Benefits />
      <Portfolio />
    </Container>
  );
};

export default HomePage;