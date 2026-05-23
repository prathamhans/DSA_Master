function unionArray(arr, arr2) {
    let i = 0
    let j = 0
    let newarr = []
    while (i < arr.length && j < arr2.length) {
        if (arr[i] <= arr2[j]) {
            if (newarr.length === 0 || newarr[newarr.length - 1] != arr[i]) {
                newarr.push(arr[i])
            }
            i++
        } else {
            if (newarr.length === 0 || newarr[newarr.length - 1] != arr2[j]) {
                newarr.push(arr2[j])
            }
            j++
        }
    }
    if (i < arr.length) {
        while (newarr.length === 0 || newarr[newarr.length - 1] != arr[i]) {
            if (!newarr.includes(arr[i])) {
                newarr.push(arr[i])
            }
            i++
        }
    }
    if (j < arr2.length) {
        while (j < arr2.length) {
            if (newarr.length === 0 || newarr[newarr.length - 1] != arr2[j]) {
                newarr.push(arr2[j])

            }
            j++
        }
    }
    return newarr
}
console.log(unionArray([3, 4, 6, 7, 9, 9], [1, 5, 7, 8, 8]))