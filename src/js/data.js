export function changeIndexData(changedObject, index, value) {
    return changedObject.map((item, i) => {
        if (i !== index) {
            return item
        }
        return value
    })
}