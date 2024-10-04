import React, { FC } from "react";
import ReactPlayer from "react-player";
import { PlayerProps } from "./types";

const VideoPlayer: FC<PlayerProps> = ({ src, controls = true, containerAttrs, ...rest }) => {
  return (
    <div {...containerAttrs}>
      <ReactPlayer
        className="react-player"
        url={src}
        controls={controls}
        width="100%"
        height="100%"
        {...rest}
      />
    </div>
  );
};

export default VideoPlayer;
