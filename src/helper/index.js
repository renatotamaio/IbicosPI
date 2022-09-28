export function removeMaskCellphone(value) {
    return value.replace(/[^0-9]+/g,'');
}