/**
 * log handles formatting and doesn't throw errors is console is undefined
 */
export default function log(
  isError: boolean,
  ...args: (string | number | object)[]
) {
  const textId = '[Affiliate] ';

  if (typeof console === 'object') {
    if (isError) {
      console.error(textId, ...args);
    } else {
      console.log(textId, ...args);
    }
  }
}
