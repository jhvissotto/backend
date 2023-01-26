import { Readable } from "stream";

export function bufferToStream(buffer: Buffer) {
  let stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}
