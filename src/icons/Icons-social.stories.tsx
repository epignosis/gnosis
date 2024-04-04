import React, { useState } from "react";
import { Text } from "../";
import * as SvgIcons from "./social";

export default {
  title: "Theme/Icons/Social",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Icons = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");

  const icons = Object.values(SvgIcons);

  // Filter icons based on search query
  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search icons..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem",
          fontSize: "1rem",
          width: "100%",
          boxSizing: "border-box",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,150px)",
          columnGap: "2rem",
          rowGap: "2rem",
        }}
      >
        {filteredIcons.map((Icon, i) => {
          // Modify icon name to exclude "Svg" at the beginning and place it as uppercase at the end
          const iconName = Icon.name.substring(3) + "SVG";
          return (
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
              <Text fontSize="2xs">{iconName}</Text>
            </div>
          );
        })}
      </div>
    </div>
  );
};
