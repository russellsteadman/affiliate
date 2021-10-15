// Check for MutationObserver
export const hasMutationObserver =
  typeof window === 'object' &&
  !(typeof window.MutationObserver === 'undefined');

// Check for URL and URLSearchParams
export const hasURL =
  typeof URL === 'function' && typeof URLSearchParams === 'function';
