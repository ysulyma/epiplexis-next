/**
 * Linear interpolation from a to b.
 */
export function lerp(a: number, b: number, t: number): number {
  return a + t * (b - a);
}

/**
 * Truncate a number to a specified number of digits.
 * @param x Number to truncate
 * @param digits Number of digits after the decimal point to include
 */
export function truncate(x: number, digits = 0): number {
  return parseFloat(x.toFixed(digits));
}
