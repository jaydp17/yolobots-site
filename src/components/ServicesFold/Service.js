import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  margin-top: 20px;
  width: 60px;
`;

const Description = styled.p`
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 1.1em;
  color: #91949c;
  width: 70%;
`;

export default ({ image, text, altText }) => (
  <Wrapper>
    <Icon src={image} alt={altText} />
    <Description>{text}</Description>
  </Wrapper>
);
