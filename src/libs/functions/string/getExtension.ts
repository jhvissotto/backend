import mimeTypes from "mime-types";

export function getExtension(filename: string) {
  const filenameParsed = filename.split(".");

  const length = filenameParsed?.length;

  if (length < 2) return null;

  const extensionCandidate = filenameParsed.pop();

  if (mimeTypes.lookup(extensionCandidate)) {
    return extensionCandidate;
  } else {
    return null;
  }
}
