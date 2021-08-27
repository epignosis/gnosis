import React from "react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import FileInput from "../FileInput";
import { screen, render } from "@test-utils/render";

describe("<Input />", () => {
  it("renders correctly", () => {
    const labelTxt = faker.lorem.word();
    const fileName = faker.system.fileName();
    const fileType = faker.system.fileExt();

    const file = new File(["test"], fileName, { type: fileType });

    render(<FileInput id="test-input" name="test-file-input" label={labelTxt} />);

    const label = screen.getByText(labelTxt);
    const input = screen.getByLabelText(labelTxt);

    expect(label).toHaveTextContent(labelTxt);
    expect(input).toHaveAttribute("name", "test-file-input");

    userEvent.upload(input, file);

    expect(file.name).toBe(fileName);
    expect(file.type).toBe(fileType);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <FileInput id="test-input" name="test-file-input" label="test label" />,
    );

    expect(container).toMatchSnapshot();
  });
});
