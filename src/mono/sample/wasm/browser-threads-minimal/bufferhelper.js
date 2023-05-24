export function gotBackBuffer(bufferView) {
  const bytes = new Uint8Array(1024);
  bufferView.set(bytes);
}
