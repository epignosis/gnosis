export const progressBarMeta = {
  title: "Components/ProgressBar",
  argTypes: {
    percent: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["success", "primary"],
      },
    },
  },
};

export const defaultArgs = { size: "md", percent: 40 };
export const customSizeArgs = { percent: 40, size: 15 };
export const customTextArgs = { percent: 75, customText: "3/4" };
export const percentageAfterArgs = { percent: 75, percentageAfter: true };
export const largeArgs = { size: "lg", percent: 75 };
export const smallArgs = { size: "sm", percent: 75 };
export const extraSmallArgs = { size: "xs", percent: 75 };
export const withLabelBeforeArgs = { size: "md", percent: 75, labelBefore: "Completed 75%" };
export const withLabelAfterArgs = { size: "sm", percent: 75, labelAfter: "Completed 75%" };
export const darkGreenArgs = { size: "md", percent: 75, color: "darkgreen" };
