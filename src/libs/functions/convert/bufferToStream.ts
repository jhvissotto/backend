import { Readable } from 'stream'

export function v1(buffer: Buffer) {
  let stream = new Readable()
  stream.push(buffer)
  stream.push(null)
  return stream
}

export function v2(buffer: Buffer) {
  return new Readable({
    read() {
      this.push(buffer)
      this.push(null)
    },
  })
}
