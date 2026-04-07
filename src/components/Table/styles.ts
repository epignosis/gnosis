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

        &:hover {
          background-color: ${table.rowHoverColor};
        }

        &:hover,
        &.selected {
          .autohide-cell {
            > div {
              opacity: 1;
            }
          }
        }

        .autohide-cell:focus-within {
          > div {
            opacity: 1;
          }
        }

        .autohide-cell {
          > div {
            opacity: 0;
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

      &.table-row-group:nth-of-type(even) {
        tr {
          background-color: ${table.rowBackgroundColor};
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

    @media screen and (max-width: 767px) {
      table {
        border-collapse: separate;
        border-spacing: 0;
      }

      .autohide-cell {
        > div {
          opacity: 1;
        }
      }

      thead {
        th {
          display: none;
        }

        .header-cell.primary-header {
          display: table-cell;
          padding: 0 1.5rem;
        }
      }

      tbody {
        tr {
          min-height: 54px;
          height: auto;

          &:hover {
            background-color: transparent;
          }
        }

        tr.mobile-row {
          td {
            background-color: ${table.rowBackgroundColor};
          }

          td {
            padding: 0;
            vertical-align: middle;
          }

          .mobile-row-content {
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            min-height: 54px;
            width: 100%;
            background-color: inherit;
            box-sizing: border-box;
            padding: 0.5rem;
          }

          .mobile-row-main {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            min-width: 0;
            flex: 1;
          }

          .selectable-cell {
            width: auto;
            padding-inline-end: 0;

            div {
              padding-block: 0;
            }
          }

          .mobile-expand-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            border: none;
            background: transparent;
            color: inherit;
            cursor: pointer;
          }

          .mobile-expand-icon {
            width: 32px;
            flex-shrink: 0;
          }

          .mobile-primary {
            flex: 1;
            min-width: 0;
          }

          .mobile-primary-value {
            overflow: hidden;
            text-overflow: ellipsis;
          }

          &.expanded {
            position: relative;
            z-index: 1;
            box-shadow: 0 8px 12px -8px rgba(0, 0, 0, 0.2);

            td {
              border-bottom: none;
            }

            .mobile-primary-value {
              overflow: visible;
              text-overflow: unset;
              white-space: normal;
            }

            .mobile-expand-toggle {
              transform: rotate(90deg);
            }
          }
        }

        &.table-row-group:nth-of-type(odd) {
          tr.mobile-row td {
            background-color: transparent;
          }
        }

        &.table-row-group:nth-of-type(even) {
          tr.mobile-row td {
            background-color: ${table.rowBackgroundColor};
          }
        }

        tr.mobile-row-expanded {
          td {
            padding: 0.5rem 1.5rem;
            background-color: white;
          }

          .mobile-expanded-content {
            display: grid;
            gap: 0.5rem;
            background-color: white;
          }

          .mobile-expanded-section {
            padding-top: 0.5rem;

            &:first-of-type {
              padding-top: 0;
            }

            & + .mobile-expanded-section {
              border-top: 1px solid var(--Grey-Lighter, #f5f5f6);
            }
          }

          .mobile-expanded-label {
            font-size: 0.875rem;
            font-weight: 700;
          }

          .mobile-expanded-value {
            white-space: normal;
            word-break: break-word;
          }
        }
      }
    }
  }
`;
