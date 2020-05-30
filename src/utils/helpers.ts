export function safeBrowserUse(cb: () => void) {
  if (typeof window !== "undefined") {
    cb();
  }
}
