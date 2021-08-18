import React, { FC } from "react";
import ReactPlayer from "react-player/lazy";
import { PlayerProps } from "../MediaPlayer";
import { videoPlayerContainer } from "./styles";

export type VideoPlayerProps = PlayerProps;

const VideoPlayer: FC<VideoPlayerProps> = ({ src, controls = true, ...rest }) => {
  return (
    <div css={videoPlayerContainer}>
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
