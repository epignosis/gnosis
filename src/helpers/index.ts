export const convertToDataTestIdName = (input: string | undefined): string => {
  if (!input) return "";

  // Split the string into an array of words
  const wordsArray = input.split(/\s+/);

  // Convert each word to lowercase and join them back together with "-"
  let finalString = wordsArray.map((word) => word.toLowerCase()).join("-");

  // Remove trailing "-" characters
  finalString = finalString.replace(/-+$/, "");

  // Remove other special characters
  finalString = finalString.replace(/[^a-z0-9-]/g, "");

  return finalString;
};
