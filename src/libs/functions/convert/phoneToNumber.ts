export function phoneToNumber(formatedCallNumber: string): number {
  const cleanString = formatedCallNumber
    .replace("+", "")
    .replace("(", "")
    .replace(")", "")
    .replace(/ /g, "")
    .replace("-", "");

  const pureNumber = Number(cleanString);

  return pureNumber;
}
