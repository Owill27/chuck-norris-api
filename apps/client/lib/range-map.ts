export function rangeMap<T = any>(n: number, fn: (i: number) => T): Array<T> {
  const arr = [];
  while (n > arr.length) {
    arr.push(fn(arr.length));
  }
  return arr;
}
