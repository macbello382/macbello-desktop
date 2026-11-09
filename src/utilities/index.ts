/**
 * Macbello Desktop - Shared Utilities
 */

/**
 * Formats a numerical amount into salon currency string (default INR: ₹).
 */
export function formatCurrency(amount: number, currency = 'INR'): string {
  try {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `₹${amount.toFixed(2)}`;
  }
}

/**
 * Formats date and time consistently for bills and logs.
 */
export function formatDateTime(date: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

/**
 * Utility for conditionally joining class names.
 */
export function cn(...classes: Array<string | boolean | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}
