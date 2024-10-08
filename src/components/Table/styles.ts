import { css, Theme } from "@emotion/react";
import { mq } from "@theme/utils/breakpoints";

export const tableContainer = ({ table }: Theme) => css`
  border-radius: 5px;
  display: block;
  width: 100%;
  overflow-x: auto;

  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;

    thead {
      border-bottom: 1px solid ${table.borderBottomColor};
      background-color: ${table.rowBackgroundColor};

      tr {
        height: 54px;
        white-space: nowrap;

        &.autohide-cell:hover,
        &.selected {
          .selectable-cell {
            > div {
              visibility: visible !important;
            }
          }
        }

        &.autohide-cell {
          .selectable-cell {
            > div {
              visibility: hidden;
            }
          }
        }

        th,
        td {
          font-weight: 700;
          padding: 0 1.5rem;
          text-align: start;

          &.header-cell {
            position: relative;
            cursor: pointer;

            &:hover {
              .sorting-icon {
                visibility: visible !important;
              }
            }

            .sorting-icon {
              &.is-default-sort {
                visibility: visible;
              }
            }

            .sorting-icon {
              visibility: hidden;
              margin-inline-start: 0.5rem;
            }

            &.hidden {
              cursor: default;
            }

            span {
              display: inline-block;

              svg {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
              }

              .icon-ascending {
                transform: rotate(180deg) translateY(50%);
              }
            }
          }
        }
      }
    }

    tbody {
      tr {
        height: 54px;
        position: relative;

        &:last-of-type {
          border-bottom: none;
        }

        &:nth-of-type(even) {
          background-color: ${table.rowBackgroundColor};
        }

        &:hover {
          background-color: ${table.rowHoverColor};
        }

        &:hover,
        &.selected {
          .autohide-cell {
            > div {
              display: flex;
            }
          }
        }

        .autohide-cell {
          > div {
            display: none;
          }
        }

        td {
          padding: 1rem 1.5rem;
          position: relative;

          .has-overflow {
            word-break: break-word;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }

          .no-wrap {
            white-space: nowrap;
          }
        }

        &.empty-state-container {
          height: 20rem;
          background: transparent;

          ${mq["lg"]} {
            height: 28rem;

            svg {
              height: 280px;
            }
          }

          td {
            width: 100%;
            position: absolute;
            inset-inline-end: 0;
            top: 50%;
            transform: translateY(-50%);
            max-width: 100%;

            article {
              max-width: 80%;
              margin: auto;

              ${mq["lg"]} {
                max-width: 70%;
              }

              ${mq["xl"]} {
                max-width: 50%;
              }

              .body {
                margin-top: 0;
              }
            }
          }
        }
      }
    }

    .selectable-cell {
      padding-inline-end: 0;
      width: 1.5rem;

      div {
        padding-block: 0;

        label {
          padding-inline-start: 0.5rem;
        }
      }
    }

    .link {
      cursor: pointer;
    }
  }
`;
