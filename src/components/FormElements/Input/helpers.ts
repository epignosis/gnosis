export const preventNonNumericalInput = (
  e: React.KeyboardEvent<HTMLInputElement>,
  isNumberType: boolean,
): void => {
  const allowedChars = ["Backspace", ".", ","];
  const numberPattern = /[0-9]/;

  const isCharacterNumber = numberPattern.test(e.key);
  const isAllowrdChar = allowedChars.includes(e.key);

  if (!isCharacterNumber && !isAllowrdChar && isNumberType) {
    e.preventDefault();
  }
};
