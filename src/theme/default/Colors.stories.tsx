import React, { FC, useState } from "react";
import { Story } from "@storybook/react";
import { Label } from "../../";
import { palletGenerator, THEME_COLOURS as defaultTheme } from "./colors";

export default {
  title: "Theme/Colors",
};

type ColorItemProps = {
  color: string;
  text?: "white" | "black";
};

const ColorItem: FC<ColorItemProps> = ({ color, text = "black" }) => (
  <div
    style={{
      height: 125,
      width: "100%",
      color: text,
      backgroundColor: color,
      padding: 12,
      borderRadius: 5,
      boxShadow: "0px 0px 10px #00000026",
      marginBottom: 4,
    }}
  >
    {color}
  </div>
);

const noPalletteColors: ReadonlyArray<string> = [defaultTheme.black, defaultTheme.white];

const Pallette: FC<{ color: string; name: string }> = ({ color, name }) => {
  const [baseColor, setBaseColor] = useState(color);
  const colors = palletGenerator(baseColor);

  return (
    <div style={{ width: 250 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Label htmlFor="baseColor">
          {name.toUpperCase()} ({baseColor})
        </Label>
        <input
          type="color"
          id="baseColor"
          name="baseColor"
          value={baseColor}
          onChange={(e): void => setBaseColor(e.target.value)}
          style={{
            marginBottom: 16,
            cursor: "pointer",
          }}
        />
      </div>

      {noPalletteColors.includes(baseColor.toUpperCase()) ? (
        <ColorItem color={baseColor} />
      ) : (
        <>
          <ColorItem color={colors.lightest} />
          <ColorItem color={colors.lighter} />
          <ColorItem color={colors.light} />
          <ColorItem color={colors.base} />
          <ColorItem text="white" color={colors.darker} />
        </>
      )}
    </div>
  );
};

type StoryColors = {
  colors: typeof defaultTheme;
};

const Template: Story<StoryColors> = ({ colors }) => {
  const names = Object.keys(colors);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {Object.values(colors).map((color, index) => (
        <div key={color} style={{ margin: "0 32px 72px" }}>
          <Pallette color={color} name={names[index]} />
        </div>
      ))}
    </div>
  );
};

export const DefaultTheme = Template.bind({});

DefaultTheme.args = {
  colors: defaultTheme,
};
