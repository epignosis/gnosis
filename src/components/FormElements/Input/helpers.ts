export const preventNonNumericalInput = (
  e: React.KeyboardEvent<HTMLInputElement>,
  isNumberType: boolean,
): void => {
  const allowedChars = ["Backspace", "Tab", ".", ",", "ArrowUp", "ArrowDown"];
  const numberPattern = /[0-9]/;

  const isCharacterNumber = numberPattern.test(e.key);
  const isAllowedChar = allowedChars.includes(e.key);

  if (!isCharacterNumber && !isAllowedChar && isNumberType) {
    e.preventDefault();
  }
};
