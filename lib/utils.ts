import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// lets us change tag properties based on external factors
// lets us create dynamic classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
