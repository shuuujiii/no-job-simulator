// input
export function InputNumOnly(value) {
    return value.replace(/[^0-9]/g, '');
}

export function InputComma(value) {
    return Number(this.InputNumOnly(value)).toLocaleString();
}