import React from 'react';
import FirstFold from '../components/FirstFold';
import styled from 'styled-components';
import ServicesFold from '../components/ServicesFold';

const MeaningFulContent = styled.div`
  margin-top: 80px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export default () => {
  return (
    <div>
      <MeaningFulContent>
        <FirstFold />
        <ServicesFold />
      </MeaningFulContent>
    </div>
  );
};
