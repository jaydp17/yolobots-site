import React from 'react';
import styled from 'styled-components';

import googlePlayBadge from '../../images/google-play-badge.png';

const Wrapper = styled.div`
  text-align: center;
`;

const FinalStatement = styled.p`
  font-weight: 700;
  font-size: 2em;
  margin-top: 40px;
  padding: 0;
`;

const GooglePlayImage = styled.div`
  padding: 40px;
`;

const CopyRight = styled.p`
  margin: 30px 0px 0px 0px;
  padding: 20px;
`;

export default () => {
  return (
    <Wrapper>
      <FinalStatement>Start working smarter and much more efficient</FinalStatement>
      <GooglePlayImage>
        <img src={googlePlayBadge} width="200" />
      </GooglePlayImage>
      <CopyRight>Copyright © {new Date().getFullYear()} StayYolo</CopyRight>
    </Wrapper>
  );
};
