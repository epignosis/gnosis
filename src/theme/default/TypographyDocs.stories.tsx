import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { Heading } from "../../";
import {
  generateTypeScaleSizes,
  TypeScaleConfig,
  DEFAULT_TYPESCALE_CONFIG,
} from "@theme/utils/typography";

export default {
  title: "Theme/Typography Documentation",
  argTypes: {
    sizeRatio: {
      control: {
        type: "select",
        options: [1.067, 1.125, 1.2, 1.25, 1.333, 1.414, 1.5, 1.618],
      },
    },
  },
  decorators: [
    (Story: Story): JSX.Element => (
      <div style={{ maxWidth: "50vw", minWidth: 600, margin: "0 auto", paddingBottom: 16 }}>
        <Story />
      </div>
    ),
  ],
};

const fontUsedFor: { [key: string]: string } = {
  "2xs": ["tooltips", "tags", "expiration text on course cards"].join(", "),
  xs: ["categories on course cards", "breadcrumb", "percentage on progress bar"].join(", "),
  sm: [
    "default body text",
    "left nav bar",
    "form labels",
    "form body",
    "button text ",
    "course card layover",
    "links",
    "form hints",
  ].join(", "),
  md: [
    "Stats-box titles (widget)",
    "Course titles on Cards",
    "gamification points on top nav",
  ].join(", "),
  lg: "Points (widget)",
  xl: "Nowhere",
  "2xl": "Points on stats widget",
  "3xl": [
    "page titles",
    "section titles",
    "course titles (course overview page)",
    "drawer titles",
    "widget titles",
  ].join(", "),
  "4xl": "Nowhere",
};

export const TypographyDocumentation: Story<TypeScaleConfig & { baseSize: number }> = (args) => {
  const typeScale = generateTypeScaleSizes({ ...DEFAULT_TYPESCALE_CONFIG, ...args });
  const usedFor = Object.keys(typeScale).reduce(
    (acc, key) => Object.assign({ [key]: fontUsedFor[key] }, acc),
    {},
  );

  return (
    <>
      <section>
        <Heading>How we generate the font sizes</Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, illum est, architecto,
          ratione sed accusantium repellendus earum non atque odio sit laboriosam porro. Animi
          deleniti, officiis quasi optio corporis sequi.
        </p>
      </section>

      <section>
        <Heading>Headings</Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum accusamus assumenda
          pariatur earum nam, illum odio. Laudantium voluptatum corporis enim vel! Rerum illo
          similique maiores velit deserunt labore optio.
        </p>
      </section>

      <section>
        <Heading>Line height</Heading>
        <p>
          We want every text on the page to have a line height <strong>{args.lineHeight}</strong>{" "}
          times it&apos;s font size.
        </p>
        <p>For example:</p>
        <pre style={{ backgroundColor: "whitesmoke", padding: "16px 8px", borderRadius: 5 }}>
          font-size: {args.baseSize}px; <br />
          line-height: {args.lineHeight}; // This gives us a line height of{" "}
          {args.baseSize * args.lineHeight}px
        </pre>
      </section>

      <section>
        <Heading>Font sizes & where they&apos;re used</Heading>
        <p />
        <table style={{ width: "100%", border: "1px solid lightgray" }}>
          <thead style={{ borderBottom: "1px solid lightgray" }}>
            <tr>
              <th style={{ padding: "8px 16px" }}>Font label</th>
              <th style={{ padding: "8px 16px" }}>
                Size <strong>(rem)</strong>
              </th>
              <th style={{ padding: "8px 16px" }}>
                Size <strong>(px)</strong>
              </th>
              <th style={{ padding: "8px 16px" }}>Used for</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(typeScale).map((key) => (
              <tr key={key} style={{ borderBottom: "1px solid lightgray" }}>
                <td style={{ borderRight: "1px solid lightgray", padding: "8px 16px" }}>{key}</td>
                <td style={{ borderRight: "1px solid lightgray", padding: "8px 16px" }}>
                  {typeScale[key]}
                </td>
                <td style={{ borderRight: "1px solid lightgray", padding: "8px 16px" }}>
                  {Number(typeScale[key].slice(0, typeScale[key].length - 3)) * args.baseSize}px
                </td>
                <td style={{ padding: "8px 16px" }}>{usedFor[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p />
      </section>

      <section>
        <Heading>Font weight</Heading>
        <p>
          We use two fonts weights to distinguish our text between <strong>regular</strong> and{" "}
          <strong>bolded</strong> text.
        </p>
        <p>Regular text:</p>
        <pre style={{ backgroundColor: "whitesmoke", padding: "16px 8px", borderRadius: 5 }}>
          font-weight: 400;
        </pre>
        <p>Bolded text:</p>
        <pre style={{ backgroundColor: "whitesmoke", padding: "16px 8px", borderRadius: 5 }}>
          font-weight: 700;
        </pre>
      </section>

      <section>
        <Heading>Font style</Heading>
        <p>
          In addition to the regular (default) font style, we use{" "}
          <strong>
            <i>italics</i>
          </strong>
          :
        </p>
        <pre style={{ backgroundColor: "whitesmoke", padding: "16px 8px", borderRadius: 5 }}>
          font-style: italic;
        </pre>
      </section>
    </>
  );
};

TypographyDocumentation.args = {
  sizeRatio: 1.125,
  baseSize: 16,
  lineHeight: DEFAULT_TYPESCALE_CONFIG.lineHeight,
};
