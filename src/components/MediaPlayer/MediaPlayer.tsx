import React, { FC } from "react";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import { PlayerProps } from "./VideoPlayer/types";

export type MediaPlayerProps = PlayerProps & {
  type: "video" | "audio";
  children?: never;
};

const MediaPlayer: FC<MediaPlayerProps> = ({ type, ...rest }) => {
  switch (type) {
    case "video":
      return <VideoPlayer {...rest} />;
    case "audio":
      return <AudioPlayer {...rest} />;
  }
};

export default MediaPlayer;
