import React, { FC } from "react";
import ReactPlayer from "react-player";
import { PlayerProps } from "../VideoPlayer/types";

const AudioPlayer: FC<PlayerProps> = ({ src, controls = true, containerAttrs, ...rest }) => {
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
