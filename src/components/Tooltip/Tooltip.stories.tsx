import React, { ReactNode } from "react";
import { Story } from "@storybook/react";
import { Button } from "../../";
import Tooltip, { TooltipProps } from "./Tooltip";

export default {
  component: Tooltip,
  title: "Components/Tooltip",
  argTypes: {
    placement: {
      control: {
        type: "select",
        options: ["top", "right", "left", "bottom"],
      },
    },
    as: {
      control: {
        type: "select",
        options: ["div", "span"],
      },
    },
  },
  decorators: [
    (story: () => ReactNode): JSX.Element => (
      <div style={{ marginTop: 150, display: "flex", justifyContent: "center" }}>{story()}</div>
    ),
  ],
};

export const Default: Story<TooltipProps> = (args) => (
  <div>
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  </div>
);

Default.args = {
  placement: "top",
  content: "This is a tooltip",
  as: "div",
};

export const WithMaxWidth = Default.bind({});

WithMaxWidth.args = {
  placement: "top",
  maxWidth: 650,
  content:
    "Once upon a midnight dreary, as I pondered, weak and weary, over many a quaint and curious volume of forgotten lore—while I nodded, nearly napping, suddenly there came a tapping, as of someone gently rapping, rapping at my chamber door. 'Tis some visitor,' I muttered, 'tapping at my chamber door—only this and nothing more.' Ah, distinctly I remember it was in the bleak December; and each separate dying ember wrought its ghost upon the floor. From my books surcease of sorrow—sorrow for the lost Lenore—for the rare and radiant maiden whom the angels name Lenore—nameless here for evermore.",
  as: "div",
};
