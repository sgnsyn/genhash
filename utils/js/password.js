function generatePassword(length, sp, num) {
  length = parseInt(length);

  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?/`~";

  let pool = letters;
  if (num === "on") pool += numbers;
  if (sp === "on") pool += specialChars;

  const poolLength = pool.length;
  const randomValues = new Uint8Array(length);
  crypto.getRandomValues(randomValues);

  let result = Array.from(
    { length },
    (_, i) => pool[randomValues[i] % poolLength],
  );

  const hasUpperCase = result.some((char) => char >= "A" && char <= "Z");
  const hasNumber =
    num === "on" && result.some((char) => numbers.includes(char));
  const hasSpecialCharacter =
    sp === "on" && result.some((char) => specialChars.includes(char));

  const usedIndices = new Set();

  const getUniqueIndex = () => {
    let index;
    do {
      index = Math.floor(Math.random() * length);
    } while (usedIndices.has(index));
    usedIndices.add(index);
    return index;
  };

  if (!hasUpperCase)
    result[getUniqueIndex()] = letters[Math.floor(Math.random() * 26) + 26];
  if (num === "on" && !hasNumber)
    result[getUniqueIndex()] =
      numbers[Math.floor(Math.random() * numbers.length)];
  if (sp === "on" && !hasSpecialCharacter)
    result[getUniqueIndex()] =
      specialChars[Math.floor(Math.random() * specialChars.length)];

  return result.join("");
}

export default generatePassword;
