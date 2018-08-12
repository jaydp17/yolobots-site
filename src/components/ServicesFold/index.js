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
`;

export default () => {
  const services = [
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
    <Wrapper>
      {services.map(service => (
        <Service {...service} />
      ))}
    </Wrapper>
  );
};
