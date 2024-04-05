import React, { useState } from "react";
import { Text } from "../../";
import { CopySolidSVG } from "../";
import * as SvgIcons from ".";

export default {
  title: "Theme/Icons/Arrows",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Icons = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const icons = Object.values(SvgIcons);

  // Filter icons based on search query
  const filteredIcons = icons.filter((icon) => {
    const newName = icon.name.substring(3) + "SVG";
    return newName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Function to copy icon name to clipboard
  const copyToClipboard = (iconName: string) => {
    navigator.clipboard.writeText(iconName);
    setCopiedIcon(iconName);
    setTimeout(() => {
      setCopiedIcon(null);
    }, 2000); // Reset copiedIcon state after 2 seconds
  };

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
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 80,
                  width: 80,
                  boxShadow: "0px 0px 10px #00000026",
                  borderRadius: 5,
                  margin: "0 auto 1rem",
                }}
              >
                <Icon height={32} color="black" />
              </div>
              <Text fontSize="2xs">
                {iconName}{" "}
                <span
                  onClick={() => copyToClipboard(iconName)}
                  style={{ position: "absolute", cursor: "pointer" }}
                >
                  {copiedIcon === iconName ? "Copied!" : <CopySolidSVG height={32} />}
                </span>
              </Text>
            </div>
          );
        })}
      </div>
    </div>
  );
};
