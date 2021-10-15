import { FC } from "react";
import { ReactPlayerProps } from "react-player/lazy";
export declare type PlayerProps = Omit<ReactPlayerProps, "url"> & {
    src: ReactPlayerProps["url"];
};
export declare type MediaPlayerProps = PlayerProps & {
    type: "video" | "audio";
    children?: never;
};
declare const MediaPlayer: FC<MediaPlayerProps>;
export default MediaPlayer;
