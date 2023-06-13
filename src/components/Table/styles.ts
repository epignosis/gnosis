import { css, Theme } from "@emotion/react";
import { mq } from "@theme/utils/breakpoints";

export const tableContainer = ({ table }: Theme) => css`
  border-radius: 5px;
  display: block;
  width: 100%;
  overflow-x: auto;

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

        th {
          font-weight: 700;
          padding: 0 1.5rem;
          text-align: start;

          &.header-cell {
            position: relative;
            cursor: pointer;

            .sorting-icon {
              margin-inline-start: 0.5rem;
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

        td {
          padding: 1rem 1.5rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 100px;
          overflow: hidden;
          position: relative;

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
