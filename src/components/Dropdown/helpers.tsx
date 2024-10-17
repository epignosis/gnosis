import { DropdownItem } from "./types";

export const filterListByKeyword = (list: DropdownItem[], keyword: string): DropdownItem[] => {
  return list.reduce((arr, item): DropdownItem[] => {
    const { items, label, originalText } = item;

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
    } else if (originalText) {
      if (originalText.toLowerCase().includes(keyword.toLowerCase())) {
        arr.push(item);
      }
    }

    return arr;
  }, [] as DropdownItem[]);
};

// Reference: https://gist.github.com/twxia/bb20843c495a49644be6ea3804c0d775
export const getScrollableParent = (node: ParentNode | null): ParentNode | null => {
  const isElement = node instanceof HTMLElement;
  const overflowY = isElement && window.getComputedStyle(node).overflowY;
  const isScrollable = overflowY !== "visible" && overflowY !== "hidden";

  if (!node) {
    return null;
  } else if (isScrollable && isElement && node.scrollHeight >= node.clientHeight) {
    return node;
  }

  return getScrollableParent(node.parentNode) || null;
};
