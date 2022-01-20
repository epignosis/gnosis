import { useMemo } from "react";

export const ellipsis = "...";

const range = (start: number, end: number) => {
  const length = end - start + 1;
  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start);
};

const FIRST_PAGE_INDEX = 1; // first page index
const NO_DISPLAYING_BOXES_WITHOUT_ELLIPSIS = 5; // NO_DISPLAYING_BOXES is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS

export const usePagination = (
  currentPage: number,
  totalPages: number,
  siblingCount = 1,
): (string | number)[] => {
  return useMemo(() => {
    const totalDisplyedBoxes = siblingCount + NO_DISPLAYING_BOXES_WITHOUT_ELLIPSIS;

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPages]
    */
    if (totalDisplyedBoxes >= totalPages) {
      return range(FIRST_PAGE_INDEX, totalPages);
    }

    // Calculate left and right sibling index and make sure they are within range 1 and totalPages
    const leftSiblingIndex = Math.max(currentPage - siblingCount, FIRST_PAGE_INDEX);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    // We do not show dots just when there is just one page number to be inserted between
    // the extremes of sibling and the page limits i.e 1 and totalPages.
    // Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPages - 2
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, ellipsis, totalPages];
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [FIRST_PAGE_INDEX, ellipsis, ...rightRange];
    }

    /*
    	Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [FIRST_PAGE_INDEX, ellipsis, ...middleRange, ellipsis, totalPages];
    }

    return [];
  }, [currentPage, totalPages]);
};
