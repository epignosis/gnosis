import { DropdownItem } from "./types";

export const filterListByKeyword = (list: DropdownItem[], keyword: string): DropdownItem[] => {
  return list.reduce((arr, item): DropdownItem[] => {
    const { items, label } = item;

    if (items && items.length > 0) {
      const filteredItems = filterListByKeyword(items, keyword);
      if (filteredItems.length > 0) {
        arr.push({ ...item, items: [...filteredItems] });
      }

      return arr;
    }

    if (typeof label === "string") {
      if (label.toLowerCase().includes(keyword.toLowerCase())) {
        arr.push(item);
      }
    }

    return arr;
  }, [] as DropdownItem[]);
};
