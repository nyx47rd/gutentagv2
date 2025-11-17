import React from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

interface PlayerProps {
  src: string;
}

export const PlayerComponent: React.FC<PlayerProps> = ({ src }) => {
  const videoSrc = {
    type: 'video',
    sources: [
      {
        src: src,
        type: 'video/mp4',
      },
    ],
  } as Plyr.SourceInfo;

  return <Plyr source={videoSrc} />;
};
