import diacritics from "diacritics";

export function slugfy(text: string) {
  return diacritics.remove(text).toLowerCase().replace(" ", "-");
}
