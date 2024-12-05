function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

function flatten(arr) {
    const result = [];

    function helper(helperArr) {
        for (let i = 0; i < helperArr.length; i++) {
            if (Array.isArray(helperArr[i])) {
                helper(helperArr[i]);
            } else {
                result.push(helperArr[i]);
            }
        }
    }
    helper(arr);
    return result;
}

function chunk(arr, size) {
    if (!Array.isArray(arr) || size <= 0) {
        throw new Error('Invalid input');
    }

    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

module.exports = { unique, flatten, chunk };
