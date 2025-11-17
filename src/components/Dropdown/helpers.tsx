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

const clearDividers = (items: DropdownItem[]): DropdownItem[] => {
  return items.map((item) => {
    if (item.items && item.items.length > 0) {
      return { ...item, items: clearDividers(item.items), divider: false };
    }
    return { ...item, divider: false };
  });
};

const addDividerToLastItem = (items: DropdownItem[]): DropdownItem[] => {
  if (items.length === 0) return items;

  const lastIndex = items.length - 1;
  const lastItem = items[lastIndex];

  if (lastItem.items && lastItem.items.length > 0) {
    const updatedItems = addDividerToLastItem(lastItem.items);
    return [...items.slice(0, lastIndex), { ...lastItem, items: updatedItems }];
  }

  return [...items.slice(0, lastIndex), { ...lastItem, divider: true }];
};

/**
 * Builds a grouped dropdown menu with dividers separating groups.
 * First clears all existing dividers, then adds dividers to the last item
 * of each group that has items following it (either standalone items or other groups).
 */
export const buildGroupedDropdownMenu = (list: DropdownItem[]): DropdownItem[] => {
  const hasNestedItems = list.some((item) => item.items && item.items.length > 0);

  if (!hasNestedItems) return list;

  // Clear all existing dividers before rebuilding the structure
  const cleanedList = clearDividers(list);

  return cleanedList.map((item, index) => {
    const isGroup = item.items && item.items.length > 0;
    const isStandaloneItem = !isGroup;

    // Standalone items pass through unchanged
    if (isStandaloneItem) return item;

    const groupItems = item.items || [];
    let processedItems = [...groupItems];

    // Check if there are items following this group
    const hasItemAfter = index < cleanedList.length - 1;
    const nextItem = hasItemAfter ? cleanedList[index + 1] : null;
    const isNextItemStandalone = nextItem && (!nextItem.items || nextItem.items.length === 0);
    const isNextItemGroup = nextItem && nextItem.items && nextItem.items.length > 0;

    // Add divider to the last item in the group to separate it from following items
    if (processedItems.length > 0 && (isNextItemStandalone || isNextItemGroup)) {
      processedItems = addDividerToLastItem(processedItems);
    }

    return {
      ...item,
      items: processedItems,
    };
  });
};
