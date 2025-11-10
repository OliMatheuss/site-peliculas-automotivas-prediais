import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
  }
`;

const ServiceContent = styled.div`
  padding: 25px;
  text-align: center;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  font-weight: 700;
  margin-bottom: 50px;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: #00a8ff;
    margin: 20px auto;
    border-radius: 2px;
  }
`;

const Button = styled.button`
  padding: 10px 25px;
  background: #00a8ff;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9rem;

  &:hover {
    background: #0097e6;
    transform: translateY(-2px);
  }
`;

const Services = () => {
  const services = [
    {
      title: "Películas Automotivas",
      description: "Proteção solar e privacidade para seu veículo com películas de alta qualidade.",
      image: "https://images.unsplash.com/photo-1588258219511-64eb629cb833?auto=format&fit=crop&q=80"
    },
    {
      title: "Películas Prediais",
      description: "Controle solar e eficiência energética para residências e escritórios.",
      image: "https://images.unsplash.com/photo-1545476874-c3a3b3a69769?auto=format&fit=crop&q=80"
    },
    {
      title: "Películas de Segurança",
      description: "Proteção máxima contra impactos e quebras para sua segurança.",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80"
    },
    {
      title: "Películas Decorativas",
      description: "Transforme seus ambientes com películas decorativas exclusivas.",
      image: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <ServicesSection>
      <Container>
        <Title>Nossos Serviços</Title>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceImage style={{ backgroundImage: `url(${service.image})` }} />
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <Button>Saiba Mais</Button>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;