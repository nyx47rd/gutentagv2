import React from 'react';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

interface PlayerProps {
  src: string;
}

export const Player: React.FC<PlayerProps> = ({ src }) => {
  return (
    <MediaPlayer
      title="Gutentag"
      src={src}
      playsInline
      autoPlay
      className="w-full h-auto"
    >
      <MediaProvider />
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  );
};
