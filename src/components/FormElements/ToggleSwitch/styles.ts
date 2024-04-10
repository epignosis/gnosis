import { css, SerializedStyles, Theme } from "@emotion/react";

export const ToggleContainer = (
  { formElements }: Theme,
  {
    isChecked,
    isDisabled,
    hasDescription,
    notSwitchedOff,
  }: { isChecked: boolean; isDisabled: boolean; hasDescription: boolean; notSwitchedOff: boolean },
): SerializedStyles => css`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .switch-container {
    display: inline-block;
    cursor: ${isDisabled ? "not-allowed" : "pointer"};
    display: flex;
    justify-content: flex-start;
    align-items: ${hasDescription ? "flex-start" : "center"};
    width: fit-content;

    .switch-container {
      display: flex;

      .switch {
        position: relative;
        display: inline-block;
        width: 33px;
        height: 17px;
        background-color: ${isDisabled
          ? formElements.toggleSwitch.disabledBackground
          : isChecked
          ? formElements.toggleSwitch.backgroundEnabled
          : notSwitchedOff
          ? formElements.toggleSwitch.backgroundEnabled
          : formElements.toggleSwitch.backgroundDisabled};
        border-radius: 10px;
        transition: background-color 0.3s;
        margin-top: ${hasDescription ? "0.25rem" : "0"};

        &.md {
          width: 109px;
          height: 40px;
          border-radius: 32px;
        }

        &.success {
          background-color: ${isDisabled
            ? formElements.toggleSwitch.disabledBackground
            : isChecked
            ? formElements.toggleSwitch.backgroundInlineEnabled
            : formElements.toggleSwitch.backgroundInlineDisabled};

          &:hover {
            background-color: ${isChecked
              ? formElements.toggleSwitch.backgroundInlineEnabled
              : formElements.toggleSwitch.hoverDisabledColor};
          }
        }
      }

      .thumb {
        position: absolute;
        top: 1px;
        margin-inline-start: ${isChecked ? "16px" : "2px"};
        width: 15px;
        height: 15px;
        background-color: ${formElements.toggleSwitch.textColor};
        border-radius: 50%;
        transition: 0.3s ease-in-out;

        &.md {
          top: 4px;
          border-radius: 32px;
          margin-inline-start: ${isChecked ? "70px" : "5px"};
          width: 32px;
          height: 32px;
        }
      }

      .inline-text {
        position: absolute;
        top: 9px;
        margin-inline-start: ${isChecked ? "12px" : "42px"};
        color: ${formElements.toggleSwitch.textColor};
      }
    }

    .label-description-container {
      display: flex;
      flex-direction: column;

      &.label-before {
        margin-inline-end: 0.5rem;
      }

      &.label-after {
        margin-inline-start: 0.5rem;
      }

      .label {
        margin-inline-start: unset;
        cursor: pointer;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 0.5em;

        &.binary-bold {
          cursor: default;

          &.is-before {
            font-weight: ${isChecked ? 400 : 700};
          }

          font-weight: ${isChecked ? 700 : 400};
        }

        &.required {
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

  .subtitle-text {
    color: ${formElements.toggleSwitch.backgroundDisabled};
  }
`;
