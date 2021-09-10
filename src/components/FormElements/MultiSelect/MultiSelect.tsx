import React, { FC } from "react";
import { useSelect, useMultipleSelection } from "downshift";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import { multiSelectContainer } from "./styles";
import { Label, Text, Checkbox } from "@components";
import { InputSize } from "@components/FormElements/Input/Input";
import { CaretDownSVG, DropUpArrowSVG } from "@icons/core";

export type MultiSelectOption = {
  value: string;
  label: string;
  name: string;
  disabled?: boolean;
};

export type MultiSelectProps = {
  placeholder: string;
  id: string;
  size?: InputSize;
  label?: string;
  inline?: boolean;
  options: MultiSelectOption[];
  onChange: (selections: unknown[]) => void;
  initialValues?: string[];
  value?: MultiSelectOption[];
  className?: string;
  block?: boolean;
  children?: never;
};

const MultiSelect: FC<MultiSelectProps> = (props) => {
  const {
    placeholder,
    size = "md",
    id,
    options,
    onChange,
    value,
    className,
    block = false,
    label,
    inline = false,
  } = props;
  const hasLabel = Boolean(label);
  const containerClassNames = classNames({
    inline: hasLabel && inline,
    [className ?? ""]: className,
  });
  const { getDropdownProps, addSelectedItem, removeSelectedItem, selectedItems } =
    useMultipleSelection({
      itemToString: (item) => item.value,
      selectedItems: value ?? [],
      onSelectedItemsChange: ({ selectedItems }) => {
        if (selectedItems) {
          onChange(selectedItems ?? []);
        }
      },
    });
  const { isOpen, getToggleButtonProps, getMenuProps, getItemProps, getLabelProps, closeMenu } =
    useSelect({
      items: options,
      circularNavigation: true,
      stateReducer: (_, { changes, type }) => {
        const itemInItems = (selectedItems as MultiSelectOption[]).find(
          ({ value }) => value === changes.selectedItem?.value,
        );

        switch (type) {
          case useSelect.stateChangeTypes.MenuKeyDownEnter:
          case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
          case useSelect.stateChangeTypes.ItemClick:
            if (itemInItems && changes.selectedItem) {
              removeSelectedItem(changes.selectedItem);
            } else if (changes.selectedItem) {
              addSelectedItem(changes.selectedItem);
            }

            return {
              ...changes,
              isOpen: true, // keep the menu open after selection.
            };
        }
        return changes;
      },
    });

  return (
    <div
      css={(theme): SerializedStyles => multiSelectContainer(theme, { isOpen, block, size })}
      className={containerClassNames}
    >
      {hasLabel && <Label {...getLabelProps({ id })}>{label}</Label>}
      <button type="button" className="select-btn" {...getToggleButtonProps(getDropdownProps())}>
        {(selectedItems.length && (selectedItems[0] as MultiSelectOption).label) || placeholder}
        <CaretDownSVG height="24" />
      </button>
      <ul data-testid="list-container" {...getMenuProps()}>
        <div className="content">
          <Text fontSize="sm"> Select one or more items</Text>
          <button className="close-btn" data-testid="close-btn" onClick={(): void => closeMenu()}>
            <DropUpArrowSVG height={20} />
          </button>
        </div>

        {options.map((option, index) => {
          const isSelected = selectedItems.find((item) => item.value === option.value);

          return (
            <li key={option.name}>
              <Checkbox
                id={`${option.value}`}
                size={size}
                checked={Boolean(isSelected)}
                inline
                style={{ padding: "0 0 0 0.5rem" }}
                {...option}
                {...getItemProps({ item: option, index, "aria-selected": Boolean(isSelected) })}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MultiSelect;
