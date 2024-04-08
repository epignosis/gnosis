import React, { useState } from "react";
import { Text, Input } from "../../";
import { CopySolidSVG } from "../";

type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;
type SVGIcons = Record<string, SVGComponent>;

// By default webpack will convert the SVGs to React components with the name "SvgIconName".
// Since we export those SVGs with a different name, we need to adjust this here in order to be searchable by their exported name.
const renameIconName = (iconName: string) => iconName.substring(3) + "SVG";

const IconsList = ({ svgIcons }: { svgIcons: SVGIcons }): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const icons = Object.values(svgIcons);

  // Filter icons based on search query
  const filteredIcons = icons.filter((icon) => {
    const iconName = renameIconName(icon.name);
    return iconName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Function to copy icon name to clipboard
  const copyToClipboard = (iconName: string) => {
    navigator.clipboard.writeText(iconName);
    setCopiedIcon(iconName);
    setTimeout(() => {
      setCopiedIcon(null);
    }, 1000); // Reset copiedIcon state after 2 seconds
  };

  return (
    <div>
      <Input
        id="search-icons"
        type="text"
        placeholder="Search icons..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div
        style={{
          display: "grid",
          marginTop: "1rem",
          gridTemplateColumns: "repeat(auto-fill,150px)",
          columnGap: "2rem",
          rowGap: "2rem",
        }}
      >
        {filteredIcons.map((Icon, i) => {
          // Modify icon name to exclude "Svg" at the beginning and place it as uppercase at the end
          const iconName = renameIconName(Icon.name);

          return (
            <div key={i} style={{ position: "relative", textAlign: "center" }}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 80,
                  width: 80,
                  boxShadow: "0 0 10px #00000026",
                  borderRadius: 5,
                  margin: "0 auto",
                }}
              >
                <Icon height={32} color="black" />
              </div>
              <Text
                fontSize="2xs"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {iconName}
                <span onClick={() => copyToClipboard(iconName)} style={{ cursor: "pointer" }}>
                  <CopySolidSVG height={32} />
                </span>
              </Text>
              {copiedIcon === iconName && (
                <span
                  style={{
                    position: "absolute",
                    background: "tomato",
                    borderRadius: "5px",
                    padding: "5px",
                    marginTop: "-50%",
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  Copied!
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconsList;
