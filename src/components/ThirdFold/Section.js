import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin: 40px 0px 40px 0px;
  padding: 20px 60px 20px 60px;
`;

const TextSection = styled.div`
  flex: 1;
`;

const ImageSection = styled.div`
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.p`
  font-size: 1.8em;
  font-weight: 800;
  padding: 30px;
`;

const Body = styled.p`
  padding: 0px 0px 20px 30px;
  font-size: 1.2em;
  font-weight: 300;
  color: #91949c;
  width: 70%;
`;

export default ({ title, description, image, align }) => {
  const sections = [
    <TextSection align={align}>
      <Heading>{title}</Heading>
      <Body>{description}</Body>
    </TextSection>,
    <ImageSection align={align}>
      <img src={image} width="50%" />
    </ImageSection>,
  ];
  if (align === 'right') {
    sections.reverse();
  }
  return <Wrapper>{sections}</Wrapper>;
};
