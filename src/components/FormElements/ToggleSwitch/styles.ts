import { css, SerializedStyles, Theme } from "@emotion/react";

export type ToggleStyleVariant = "primary" | "success";
export type ToggleStyleSize = "sm" | "md";

type ToggleContainerProps = {
  isChecked: boolean;
  isDisabled: boolean;
  hasDescription: boolean;
  notSwitchedOff: boolean;
  showOutlineBorder: boolean;
  variant: ToggleStyleVariant;
  size: ToggleStyleSize;
};

const getSwitchDimensions = (size: ToggleStyleSize) => {
  return size === "md"
    ? { width: "72px", height: "40px", borderRadius: "32px" }
    : { width: "33px", height: "17px", borderRadius: "10px" };
};

const getThumbDimensions = (size: ToggleStyleSize, isChecked: boolean) => {
  return size === "md"
    ? {
        top: "4px",
        width: "32px",
        height: "32px",
        borderRadius: "32px",
        marginInlineStart: isChecked ? "33px" : "5px",
      }
    : {
        top: "1px",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        marginInlineStart: isChecked ? "16px" : "2px",
      };
};

const getSwitchBackgroundColor = (
  theme: Theme,
  variant: ToggleStyleVariant,
  isChecked: boolean,
  isDisabled: boolean,
  notSwitchedOff: boolean,
) => {
  const { formElements } = theme;

  if (isDisabled) {
    return formElements.toggleSwitch.disabledBackground;
  }

  if (variant === "success") {
    return isChecked
      ? formElements.toggleSwitch.backgroundInlineEnabled
      : formElements.toggleSwitch.backgroundInlineDisabled;
  }

  if (isChecked || notSwitchedOff) {
    return formElements.toggleSwitch.backgroundEnabled;
  }

  return formElements.toggleSwitch.backgroundDisabled;
};

export const ToggleContainer = (
  theme: Theme,
  {
    isChecked,
    isDisabled,
    hasDescription,
    notSwitchedOff,
    showOutlineBorder,
    variant,
    size,
  }: ToggleContainerProps,
): SerializedStyles => {
  const { formElements } = theme;
  const switchDimensions = getSwitchDimensions(size);
  const thumbDimensions = getThumbDimensions(size, isChecked);
  const backgroundColor = getSwitchBackgroundColor(
    theme,
    variant,
    isChecked,
    isDisabled,
    notSwitchedOff,
  );

  return css`
    display: flex;
    flex-direction: column;
    gap: 5px;

    .toggle-switch__container {
      display: flex;
      justify-content: flex-start;
      align-items: ${hasDescription ? "flex-start" : "center"};
      width: fit-content;
      cursor: ${isDisabled ? "not-allowed" : "pointer"};

      .toggle-switch__wrapper {
        display: flex;

        ${showOutlineBorder &&
        `
          border: 1px solid ${formElements.toggleSwitch.textColor};
          border-radius: 0.625rem;
        `}

        .toggle-switch__switch {
          position: relative;
          display: flex;
          align-items: center;
          width: ${switchDimensions.width};
          height: ${switchDimensions.height};
          background-color: ${backgroundColor};
          border-radius: ${switchDimensions.borderRadius};
          transition: background-color 0.3s;
          margin-top: ${hasDescription ? "0.25rem" : "0"};

          ${variant === "success" &&
          `
            &:hover {
              background-color: ${
                isChecked
                  ? formElements.toggleSwitch.backgroundInlineEnabled
                  : formElements.toggleSwitch.hoverDisabledColor
              };
            }
          `}
        }

        .toggle-switch__thumb {
          position: absolute;
          top: ${thumbDimensions.top};
          margin-inline-start: ${thumbDimensions.marginInlineStart};
          width: ${thumbDimensions.width};
          height: ${thumbDimensions.height};
          background-color: ${formElements.toggleSwitch.textColor};
          border-radius: ${thumbDimensions.borderRadius};
          transition: 0.3s ease-in-out;
        }

        .toggle-switch__inline-text {
          position: absolute;
          top: 9px;
          margin-inline-start: ${isChecked ? "12px" : "42px"};
          color: ${formElements.toggleSwitch.textColor};
        }

        .toggle-switch__icon {
          display: flex;
          justify-content: center;
          margin-inline-start: ${isChecked ? "2px" : "38px"};
          color: ${formElements.toggleSwitch.textColor};
        }
      }

      .toggle-switch__label-container {
        display: flex;
        flex-direction: column;

        &.toggle-switch__label-container--before {
          margin-inline-end: 0.5rem;
        }

        &.toggle-switch__label-container--after {
          margin-inline-start: 0.5rem;
        }

        .toggle-switch__label {
          margin-inline-start: unset;
          cursor: pointer;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 0.5em;

          &.toggle-switch__label--binary-bold {
            cursor: default;

            &.toggle-switch__label--before {
              font-weight: ${isChecked ? 400 : 700};
            }

            font-weight: ${isChecked ? 700 : 400};
          }

          &.toggle-switch__label--required {
            &::after {
              content: " *";
              color: ${formElements.toggleSwitch.requiredAsteriskColor};
            }
          }

          & > div {
            line-height: 0;

            svg {
              color: ${formElements.toggleSwitch.backgroundEnabled};
            }
          }
        }
      }
    }

    .toggle-switch__subtitle {
      color: ${formElements.toggleSwitch.subtitleDescription};
    }
  `;
};
