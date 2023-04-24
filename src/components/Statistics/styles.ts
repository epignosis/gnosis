import { css, SerializedStyles, Theme } from "@emotion/react";

export const statisticsContainer = ({ statistics }: Theme): SerializedStyles => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 1.5rem 0.5rem;
  border-radius: 5px;
  height: 100%;
  background: ${statistics.background};
  color: ${statistics.color};

  .title,
  .subtitle {
    margin-top: 0.5rem;
    color: ${statistics.color};
  }
`;
