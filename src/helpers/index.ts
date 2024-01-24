export const convertToDataTestIdName = (input: string | undefined): string => {
  if (!input) return "";

  let finalString = input.toLowerCase().replace(/\s+/g, "-").replace(/-+$/, "");

  // Remove other special characters
  finalString = finalString.replace(/[^a-z0-9-]/g, "");
  return finalString;
};
