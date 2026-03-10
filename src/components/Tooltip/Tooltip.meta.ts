export const tooltipMeta = {
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
};

export const defaultArgs = {
  placement: "top",
  content: "This is a tooltip",
  as: "div",
};
export const withMaxWidthArgs = {
  placement: "top",
  maxWidth: 650,
  content: "Once upon a midnight dreary, as I pondered, weak and weary, over many a quaint and curious volume of forgotten lore—while I nodded, nearly napping, suddenly there came a tapping, as of someone gently rapping, rapping at my chamber door.",
  as: "div",
};
export const withNoArrowArgs = {
  placement: "top",
  content: "This is a tooltip with no arrow",
  as: "div",
  showArrow: false,
};
export const withBorderColorArgs = {
  placement: "top",
  content: "This is a tooltip with a border color",
  as: "div",
  borderColor: "red",
};
