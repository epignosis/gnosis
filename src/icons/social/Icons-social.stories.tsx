import React from "react";
import IconsList from "../IconsList/IconsList";
import * as SvgIcons from ".";

export default {
  title: "Theme/Icons/Social",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Icons = (): JSX.Element => {
  return <IconsList svgIcons={SvgIcons} />;
};
