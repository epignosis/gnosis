import React, { FC } from "react";
import { useSelect, useMultipleSelection } from "downshift";
import { SerializedStyles } from "@emotion/react";
import classNames from "classnames";
import Label from "../Label/Label";
import Text from "../../Text/Text";
import Checkbox, { CheckboxOption } from "../CheckboxGroup/Checkbox";
import { InputSize } from "../Input/Input";
import { multiSelectContainer } from "./styles";
import { CaretDownSVG, DropUpArrowSVG } from "@icons/core";

export type MultiSelectProps = {
  placeholder: string;
  id: string;
  status?: "valid" | "error"; //openit
  size?: InputSize;
  label?: string;
  inline?: boolean;
  options: CheckboxOption[];
  onChange: (selections: unknown[]) => void;
  value?: CheckboxOption[];
  className?: string;
  children?: never;
};

const MultiSelect: FC<MultiSelectProps> = (props) => {
  const {
    placeholder,
    status = "valid", //openit
    size = "md",
    id,
    options,
    onChange,
    value,
    className,
    label,
    inline = false,
  } = props;
  const hasLabel = Boolean(label);
  const containerClassNames = classNames({
    valid: status === "valid", //openit
    error: status === "error", //openit
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
        const itemInItems = (selectedItems as CheckboxOption[]).find(
          ({ value }) => value === changes.selectedItem?.value,
        );

        switch (type) {
          case useSelect.stateChangeTypes.MenuKeyDownEnter:
          case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
          case useSelect.stateChangeTypes.ItemClick:
            if (itemInItems && changes.selectedItem) {
              //removeSelectedItem(changes.selectedItem); //old buggy way
              removeSelectedItem(itemInItems); //openit: use itemInItems instead of changes.selectedItem (else initial vals cannot be unchecked)
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

  //openit: show all 'selected' items when collapsed
  const _items =
    <div>
      {selectedItems.map((item, index) => {
        return <span key={index} style={{ border: "1px solid #aaa", background: "#eee", marginRight: "5px" }}>{(item as CheckboxOption).label}</span>
      })}
    </div>;

  return (
    <div
      css={(theme): SerializedStyles => multiSelectContainer(theme, { isOpen, size, inline })}
      className={containerClassNames}
    >
      {hasLabel && <Label {...getLabelProps({ id })}>{label}</Label>}
      <button type="button" className="select-btn" {...getToggleButtonProps(getDropdownProps())}>
        {/* {(selectedItems.length && (selectedItems[0] as CheckboxOption).label) || placeholder} */}
        {(selectedItems.length && _items) || placeholder}
        <CaretDownSVG height="24" />
      </button>
      <ul data-testid="list-container" {...getMenuProps()}>
        <div className="content">
          <Text fontSize="sm"> Select one or more items</Text>
          {/* openit: added type="button", otherwise would act as 'form submit' */}
          <button type="button" className="close-btn" data-testid="close-btn" onClick={(): void => closeMenu()}>
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
                onChange={() => { }} //openit: for warning about 'checked' without onChange
                inline
                containerClassName="checkbox"
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
