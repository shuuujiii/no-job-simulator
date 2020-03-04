import * as parsejs from './parse';

// 下と一緒
export function getValueSumOfKeyValueObj(obj) {
    let sum = 0;
    Object.keys(obj).forEach((key) => {
        sum += parsejs.parseIntZero(obj[key])
    });
    return sum;
}

export function getObjectValueSum(obj) {
    return Object.values(obj).reduce((ac, cur) => ac + parsejs.parseIntZero(cur), 0)
}