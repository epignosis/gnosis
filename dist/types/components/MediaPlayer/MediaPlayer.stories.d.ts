import React from "react";
import { Story } from "@storybook/react";
import { MediaPlayerProps } from "./MediaPlayer";
declare const _default: {
    component: React.FC<MediaPlayerProps>;
    title: string;
    argTypes: {
        type: {
            control: boolean;
        };
    };
};
export default _default;
export declare const Video: Story<MediaPlayerProps>;
export declare const Audio: Story<MediaPlayerProps>;
