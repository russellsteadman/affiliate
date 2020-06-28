/**
 * log handles formatting and doesn't throw errors is console is undefined
 * 
 * @module affiliate/src/Log
 */
export default function (isError: boolean, ...args: any) {
    const textId = '[Affiliate] ';

    if (typeof console === 'object') {
        if (isError) {
            console.error(textId, ...args);
        } else {
            console.log(textId, ...args);
        }
    }
};