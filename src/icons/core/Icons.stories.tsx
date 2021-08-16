import React from "react";
import * as SvgIcons from ".";
import { Text } from "@components";

export default {
  title: "Assets/Icons",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Icons = (): JSX.Element => {
  const icons = Object.values(SvgIcons);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,150px)",
        columnGap: "2rem",
        rowGap: "2rem",
      }}
    >
      {icons.map((Icon, i) => (
        <div key={i} style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 80,
              width: 80,
              boxShadow: "0px 0px 10px #00000026",
              borderRadius: 5,
              margin: "0 auto 1rem",
            }}
          >
            <Icon height={32} color="black" />
          </div>
          <Text fontSize="2xs">{Icon.name}</Text>
        </div>
      ))}
    </div>
  );
};
