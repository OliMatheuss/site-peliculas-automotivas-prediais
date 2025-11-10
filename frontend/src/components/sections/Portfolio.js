import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 80px 0;
  background-color: white;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: #333;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  padding: 20px;
  text-align: center;
  color: white;
`;

const Portfolio = () => {
  const projects = [
    {
      title: "Película Residencial",
      image: "/assets/images/portfolio-1.jpg",
      description: "Instalação de película de controle solar em residência"
    },
    {
      title: "Película Automotiva",
      image: "/assets/images/portfolio-2.jpg",
      description: "Aplicação de película em veículo de luxo"
    },
    {
      title: "Película Comercial",
      image: "/assets/images/portfolio-3.jpg",
      description: "Projeto para fachada comercial"
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <Container>
      <Title>Nossos Trabalhos</Title>
      <Grid>
        {projects.map((project, index) => (
          <GalleryItem key={index}>
            <img src={project.image} alt={project.title} />
            <Overlay className="overlay">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </Overlay>
          </GalleryItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;