import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Footer = styled.footer`
  padding: 20px;
  background-color: #f0f0f0;
`;

const HeroSection = styled.section`
  margin: 20px 0;
  padding: 40px 20px;
  background-color: #0078d4;
  color: white;
`;

const HomePage = () => {
  return (
    <Container>
      <Header>
        <h1>Company Logo</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/products">Products/Services</Link> | <Link to="/contact">Contact</Link>
        </nav>
      </Header>
      <HeroSection>
        <h2>Revolutionize Your Business with AI Automation Solutions</h2>
        <p>Boost productivity and efficiency with our state-of-the-art AI-powered tools.</p>
        <button>Learn More</button>
      </HeroSection>
      <Footer>
        © 2024 Zuse Technologies. All rights reserved.
      </Footer>
    </Container>
  );
}

export default HomePage;
