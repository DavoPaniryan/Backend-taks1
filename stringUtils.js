function reverse1(str) {
    if (typeof str !== 'string') {
        throw new Error('input type must be string');
    }

    return str.split('').reverse().join('');
}

function reverse2(str) {
    if (typeof str !== 'string') {
        throw new Error('input type must be string');
    }

    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

function capitalize(str) {
    if (typeof str !== 'string') {
        throw new Error('input type must be string');
    }
    return str[0].toUpperCase() + str.slice(1);
}

function truncate(str, length) {
    if (typeof str !== 'string' || str.length < length) {
        throw new Error('input type must be string');
    }

    const isNeedTruncate = str.length > length;

    if (isNeedTruncate) {
        return str.slice(0, length) + '...';
    }
    return str;
}

module.exports = { reverse1, reverse2, capitalize, truncate };
