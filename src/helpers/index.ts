export const convertToDataTestIdName = (input: string | undefined): string => {
  if (!input) return "";

  const sanitizedString = input
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  // Remove trailing hyphens without using regular expressions
  const lastHyphenIndex = sanitizedString.lastIndexOf("-");
  const finalString =
    lastHyphenIndex !== -1 ? sanitizedString.slice(0, lastHyphenIndex + 1) : sanitizedString;

  return finalString;
};
