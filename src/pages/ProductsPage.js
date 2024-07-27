import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 20px;
  text-align: left;
`;

const ProductSection = styled.section`
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Heading = styled.h2`
  color: #0078d4;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #0078d4;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #005ba1;
  }
`;

const ProductsPage = () => {
  return (
    <PageContainer>
      <Heading>Sales Force Automation with AI</Heading>
      <ProductSection>
        <p>Detailed explanation of the product, its features, and benefits. Automate your sales process efficiently.</p>
        <List>
          <ListItem>AI-driven lead scoring</ListItem>
          <ListItem>Automated follow-ups</ListItem>
          <ListItem>Sales analytics</ListItem>
        </List>
        <Button>Learn More</Button>
      </ProductSection>
      <Heading>Data Entry Automation and Inventory Management with AI</Heading>
      <ProductSection>
        <p>Overview of tool functionalities, reducing manual data entry errors, and optimizing inventory management.</p>
        <List>
          <ListItem>Automated data extraction</ListItem>
          <ListItem>Real-time inventory tracking</ListItem>
          <ListItem>Predictive restocking</ListItem>
        </List>
        <Button>Learn More</Button>
      </ProductSection>
      <Heading>Fully Automated Polytunnel with AI-Generated Reports</Heading>
      <ProductSection>
        <p>Enhance agricultural productivity with automated climate controls and growth prediction systems.</p>
        <List>
          <ListItem>Climate control automation</ListItem>
          <ListItem>Growth prediction</ListItem>
          <ListItem>Remote monitoring</ListItem>
        </List>
        <Button>Learn More</Button>
      </ProductSection>
    </PageContainer>
  );
}

export default ProductsPage;
