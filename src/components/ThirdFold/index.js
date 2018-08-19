import React from 'react';
import Section from './Section';

import botRescueImg from '../../images/botrescue.png';
import integrationsImg from '../../images/network.png';
import storageImg from '../../images/storage-feature.png';

export default () => {
  const data = [
    {
      title: 'Bots to the rescue',
      description:
        'Let the bot do all the heavy lifting for you. All the mundane tasks that you used to do can now by automated',
      image: botRescueImg,
      align: 'left',
    },
    {
      title: 'Smart Integrations',
      description:
        "We've created our bots to make your life easier. When you perform an action the bots know what you'll need next.",
      image: integrationsImg,
      align: 'right',
    },
    {
      title: 'Storage Efficient',
      description: 'No need to install apps for every single task you wanna perform',
      image: storageImg,
      align: 'left',
    },
  ];
  return (
    <div>
      {data.map(fields => (
        <Section {...fields} key={fields.title} />
      ))}
    </div>
  );
};
