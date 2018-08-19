import React from 'react';
import styled from 'styled-components';

import Service from './Service';
import pnrBotLogo from '../../images/pnrBotLogo.png';
import moviesBotLogo from '../../images/moviesbotLogo.png';
import cabBotLogo from '../../images/cabbotLogo.png';
import seriesBotLogo from '../../images/seriesbotLogo.png';
import yoBotLogo from '../../images/yobotLogo.png';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding: 20px;
`;

const Heading = styled.p`
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 1.5em;
  color: #767d89;
  display: block;
  text-align: center;
`;

export default () => {
  const serviceRow1 = [
    {
      image: pnrBotLogo,
      text: 'Check & Get notified when your PNR status changes',
      altText: 'PNR bot icon',
    },
    {
      image: moviesBotLogo,
      text: 'Check movies running this week with trailer and book tickets',
      altText: 'Movies bot icon',
    },
    {
      image: cabBotLogo,
      text: 'Compare Cabs like ola and Uber for best fare or least arrival time',
      altText: 'Cab bot icon',
    },
  ];
  const serviceRow2 = [
    {
      image: seriesBotLogo,
      text: 'Notifies you when the next episode of your favorite Tv Series',
      altText: 'Series bot icon',
    },
    {
      image: yoBotLogo,
      text: 'A simple chat bot, not the smartest one but tries to be helpful',
      altText: 'Yo bot icon',
    },
  ];
  return (
    <div>
      <Heading>Some of the services available in app</Heading>
      <Wrapper>
        {serviceRow1.map(service => (
          <Service {...service} />
        ))}
      </Wrapper>
      <Wrapper>
        {serviceRow2.map(service => (
          <Service {...service} />
        ))}
      </Wrapper>
    </div>
  );
};
