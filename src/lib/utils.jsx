/**
 * @typedef {string | number | bigint | boolean | Array | Object | null | undefined} ClassValue
 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using `clsx` and `twMerge`.
 * @param {...ClassValue} inputs - Class values to combine.
 * @returns {string} - Merged class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}