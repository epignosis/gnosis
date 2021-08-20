import { css } from "@emotion/react";

export const tableContainer = css`
  border: 1px solid #dddddd;
  border-radius: 5px;
  overflow: hidden;

  .table-container {
    overflow-x: auto;

    table {
      width: 100%;
      background-color: #ffffff;
      border-spacing: 0;
      white-space: nowrap;

      thead {
        box-shadow: 0px 1px 14px #dddddd;

        tr {
          height: 5rem;

          th {
            font-weight: 700;
            padding: 0 1.5rem;
            text-align: left;
          }
        }
      }

      tbody {
        tr {
          &:first-of-type {
            td {
              padding-top: 1.5rem;
            }
          }

          &:last-of-type {
            td {
              border: 0;
            }
          }
        }

        td {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid #dddddd;
        }
      }
    }
  }

  footer {
    box-shadow: 0px 2px 14px #dddddd;
    padding: 0.75rem 1.5rem;
    text-align: center;
  }
`;
