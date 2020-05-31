export function safeBrowserUse<T extends any>(cb: () => T) {
  if (typeof window !== "undefined") {
    return cb();
  }
}
