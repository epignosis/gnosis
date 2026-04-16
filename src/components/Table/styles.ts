import { css, Theme } from "@emotion/react";
import { mq } from "@theme/utils/breakpoints";

export const tableContainer = ({ table, typeScaleSizes }: Theme) => css`
  border-radius: 5px;
  display: block;
  width: 100%;
  overflow-x: auto;

  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
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
          display: none;
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

        .header-cell.primary-header {
          display: table-cell;
          padding: 0 1.5rem;
        }
      }
    }

    tbody {
      tr {
        min-height: 54px;
        height: auto;
        position: relative;

        &:last-of-type {
          border-bottom: none;
        }

        &:hover {
          background-color: transparent;
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

    .autohide-cell {
      > div {
        opacity: 1;
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

    tbody {
      tr.table-mobile-row {
        td {
          background-color: ${table.rowBackgroundColor};
          padding: 0;
          vertical-align: middle;
        }

        .table-mobile-row__content {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          min-height: 54px;
          width: 100%;
          background-color: inherit;
          box-sizing: border-box;
          padding: 0.5rem;

          &.table-mobile-row__content--padded {
            padding-left: 1.5rem;
          }
        }

        .table-mobile-row__main {
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

        .table-mobile-row__toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          border: none;
          background: transparent;
          color: inherit;
          cursor: pointer;
        }

        .table-mobile-row__toggle-icon {
          width: 32px;
          flex-shrink: 0;
        }

        .table-mobile-row__primary {
          flex: 1;
          min-width: 0;
        }

        .table-mobile-row__primary-value {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        &.table-mobile-row--expanded {
          position: relative;
          z-index: 1;
          box-shadow: 0 8px 12px -8px rgba(0, 0, 0, 0.2);

          td {
            border-bottom: none;
          }

          .table-mobile-row__primary-value {
            overflow: visible;
            text-overflow: unset;
            white-space: normal;
          }

          .table-mobile-row__toggle {
            transform: rotate(90deg);
          }
        }
      }

      &.table-row-group:nth-of-type(odd) {
        tr.table-mobile-row td {
          background-color: transparent;
        }
      }

      &.table-row-group:nth-of-type(even) {
        tr.table-mobile-row td {
          background-color: ${table.rowBackgroundColor};
        }
      }

      tr.table-mobile-row-details {
        td {
          padding: 0.5rem 1.5rem;
          background-color: white;
        }

        .table-mobile-row-details__content {
          display: grid;
          gap: 0.5rem;
          background-color: white;
        }

        .table-mobile-row-details__section {
          padding-top: 0.5rem;

          &:first-of-type {
            padding-top: 0;
          }

          & + .table-mobile-row-details__section {
            border-top: 1px solid ${table.rowBackgroundColor};
          }
        }

        .table-mobile-row-details__label {
          font-size: ${typeScaleSizes.sm};
          font-weight: 700;
        }

        .table-mobile-row-details__value {
          white-space: normal;
          word-break: break-word;
        }
      }
    }

    ${mq["md"]} {
      border-collapse: collapse;

      thead {
        tr {
          th,
          td {
            display: table-cell;
          }
        }
      }

      tbody {
        tr {
          min-height: 0;
          height: 54px;

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
        }
      }

      .autohide-cell {
        > div {
          opacity: 0;
        }
      }
    }
  }
`;
