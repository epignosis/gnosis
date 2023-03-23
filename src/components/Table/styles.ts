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
      border-bottom: 1px solid #dddddd;
      background-color: ${table.rowBackgroundColor};

      tr {
        height: 4rem;
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

          .no-wrap {
            white-space: nowrap;
          }
        }

        .actions-container {
          background-color: ${table.rowHoverColor};
          position: absolute;
          inset-inline-end: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          display: flex;
          align-items: center;
          padding: 0 2rem;
        }

        &.empty-state-container {
          height: 20rem;
          background: transparent;

          ${mq["lg"]} {
            height: 18rem;
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
        margin-bottom: 0.25rem;

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
