import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 80px 0;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: #333;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  text-align: left;
  padding: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    color: #333;
    font-size: 1.5rem;

    img {
      width: 30px;
      margin-right: 15px;
    }
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const Benefits = () => {
  const benefits = [
    {
      title: "Proteção UV",
      description: "Proteção contra 99% dos raios UV nocivos, preservando sua saúde e seus móveis.",
      icon: "/assets/icons/sun.svg"
    },
    {
      title: "Economia de Energia",
      description: "Redução significativa no consumo de energia com ar condicionado.",
      icon: "/assets/icons/energy.svg"
    },
    {
      title: "Privacidade",
      description: "Maior privacidade para sua casa ou escritório sem comprometer a visibilidade.",
      icon: "/assets/icons/privacy.svg"
    },
    {
      title: "Conforto Visual",
      description: "Redução do ofuscamento e melhor distribuição da luz natural.",
      icon: "/assets/icons/eye.svg"
    }
  ];

  return (
    <Container>
      <Title>Benefícios</Title>
      <Grid>
        {benefits.map((benefit, index) => (
          <BenefitCard key={index}>
            <h3>
              <img src={benefit.icon} alt={benefit.title} />
              {benefit.title}
            </h3>
            <p>{benefit.description}</p>
          </BenefitCard>
        ))}
      </Grid>
    </Container>
  );
};

export default Benefits;