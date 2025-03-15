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
  return Number.parseFloat(x.toFixed(digits));
}

/** Fixed version of a % b taking values in [0, b) */
export function mod(a: number, b: number): number {
  return ((a % b) + b) % b;
}
