import React from 'react';
import styled from 'styled-components';

import yoloBotsLogo from '../../images/yolobotsLogo2.png';
import googlePlayBadge from '../../images/google-play-badge.png';
import PhoneSlider from './PhoneSlider';

const BaseLeftElement = styled.div`
  text-align: right;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const PhoneElement = styled.div`
  grid-row: 1 / 4;
  grid-column: 2;
`;

export default () => {
  return (
    <GridContainer>
      <BaseLeftElement>
        <img src={yoloBotsLogo} width="250" alt="app logo" />
      </BaseLeftElement>
      <PhoneElement>
        <PhoneSlider />
      </PhoneElement>
      <BaseLeftElement>
        <p>
          With YoloBots you can get stuff done fast without the need to have hundreds of apps for
          every little task.
        </p>
      </BaseLeftElement>
      <BaseLeftElement>
        <img src={googlePlayBadge} width="250" alt="get on google play button"/>
      </BaseLeftElement>
    </GridContainer>
  );
};
