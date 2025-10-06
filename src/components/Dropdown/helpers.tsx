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

export const getInlinePaddingStart = (level: number, isSearchable: boolean) => {
  const initialPadding = isSearchable ? 0.25 : 1;

  return initialPadding + level * 0.75;
};

export const buildDropdownMenu = (list: DropdownItem[]): DropdownItem[] => {
  const hasNestedItems = list.some((item) => item.items && item.items.length > 0);

  if (!hasNestedItems) return list;

  const filteredGroups = list.filter((groupItem) => groupItem.items && groupItem.items.length > 0);

  return filteredGroups.reduce<DropdownItem[]>((result, groupItem, groupIndex) => {
    const isLastGroup = groupIndex === filteredGroups.length - 1;
    const groupItems = groupItem.items || [];
    const newGroup = [...groupItems];

    // Add divider to the last item of the group (except for the last group)
    if (!isLastGroup && newGroup.length > 0) {
      const lastItemIndex = newGroup.length - 1;
      newGroup[lastItemIndex] = { ...newGroup[lastItemIndex], divider: true };
    }
    return result.concat(newGroup);
  }, []);
};
