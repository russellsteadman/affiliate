/**
 * log handles formatting and doesn't throw errors is console is undefined
 *
 * @module affiliate/src/Log
 */
export default function (isError: boolean, ...args: (string | number | object)[]): void;
