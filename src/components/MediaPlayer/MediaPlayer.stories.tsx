import React from "react";
import { Story } from "@storybook/react/types-6-0";
import MediaPlayer, { MediaPlayerProps } from "./MediaPlayer";

export default {
  component: MediaPlayer,
  title: "components/MediaPlayer",
  argTypes: {
    type: {
      control: false,
    },
  },
};

const Template: Story<MediaPlayerProps> = (args) => <MediaPlayer {...args} />;

export const Video = Template.bind({});

Video.args = {
  type: "video",
  src: "https://media.vimejs.com/720p.mp4",
  config: {
    file: {
      attributes: {
        poster: "https://media.vimejs.com/poster.png",
      },
    },
  },
};

export const Audio = Template.bind({});

Audio.args = {
  type: "audio",
  src: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
};
