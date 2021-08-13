import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Heading, { HeadingTag, SIZES, HeadingProps } from "./Heading";

export default {
  title: "base/Typography/Type Scale",
  decorators: [
    (Story: Story): JSX.Element => (
      <div style={{ width: "100%", maxWidth: 680 }}>
        <Story />
      </div>
    ),
  ],
};

const Template: Story<HeadingProps> = ({ as, size }) => (
  <>
    <section style={{ marginBottom: 24 }}>
      <Heading as={as}>The quick brown fox jumps over the lazy dog ({size})</Heading>
      <p>
        What looked like a small patch of purple grass, above five feet square, was moving across
        the sand in their direction. When it came near enough he perceived that it was not grass;
        there were no blades, but only purple roots. The roots were revolving, for each small plant
        in the whole patch, like the spokes of a rimless wheel.
      </p>
      <p>
        When it came near enough he perceived that it was not grass; there were no blades, but only
        purple roots. The roots were revolving, for each small plant in the whole patch, like the
        spokes of a rimless wheel.
      </p>

      <span>We are using technologies such as:</span>
      <ul>
        <li>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            React
          </a>
        </li>
        <li>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            Typescript
          </a>
        </li>
        <li>
          Data fetching:
          <ol>
            <li>
              <a href="https://github.com/axios/axios" target="_blank" rel="noreferrer">
                Axios
              </a>
            </li>
            <li>
              <a href="https://react-query.tanstack.com/" target="_blank" rel="noreferrer">
                React Query
              </a>
            </li>
          </ol>
        </li>
        <li>
          Bionic:
          <ul>
            <li>Arms</li>
            <li>Eyes</li>
            <li>Legs</li>
          </ul>
        </li>
      </ul>

      <small>- The Gnosis Front end team</small>
    </section>
  </>
);

export const TypeScale: Story<{ baseFontSize: number }> = () => {
  return (
    <article>
      {Object.keys(SIZES).map((key) => (
        <Template key={key} as={key as HeadingTag} size={SIZES[key]} />
      ))}
    </article>
  );
};

TypeScale.parameters = {
  controls: { hideNoControlsWarning: true },
};
