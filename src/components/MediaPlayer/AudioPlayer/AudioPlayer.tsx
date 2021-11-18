import React, { FC } from "react";
import ReactPlayer from "react-player/lazy";
import { PlayerProps } from "../MediaPlayer";

export type AudioPlayerProps = PlayerProps;

const AudioPlayer: FC<AudioPlayerProps> = ({ src, controls = true, containerAttrs, ...rest }) => {
  return (
    <div {...containerAttrs}>
      <ReactPlayer
        url={src}
        controls={controls}
        className="react-player"
        height="3.5rem"
        width="100%"
        {...rest}
      />
    </div>
  );
};

export default AudioPlayer;
