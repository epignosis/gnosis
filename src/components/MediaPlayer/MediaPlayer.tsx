import React, { FC } from "react";
import { ReactPlayerProps } from "react-player/lazy";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import AudioPlayer from "./AudioPlayer/AudioPlayer";

export type PlayerProps = Omit<ReactPlayerProps, "url"> & {
  src: ReactPlayerProps["url"];
  containerAttrs?: React.HTMLAttributes<HTMLDivElement>;
};

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
