export function isEmpty(val) {

    if (!val) {//null or undefined or ''(空文字) or 0 or false

        if (val !== 0 && val !== false) {
            return true;
        }

    } else if (typeof val == "object") {//array or object

        return Object.keys(val).length === 0;

    }

    return false;//値は空ではない
}