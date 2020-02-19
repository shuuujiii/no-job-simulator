import * as parsejs from './parse';

export function getValueSumOfKeyValueObj(obj) {
    let sum = 0;
    Object.keys(obj).forEach((key) => {
        sum += parsejs.parseIntZero(obj[key])
    });
    return sum;
}