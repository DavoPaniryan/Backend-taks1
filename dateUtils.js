function formatDate(date, format) {
    if (!(date instanceof Date)) {
        throw new Error('Invalid date');
    }

    const map = {
        YYYY: date.getFullYear(),
        MM: String(date.getMonth() + 1).padStart(2, '0'),
        DD: String(date.getDate()).padStart(2, '0'),
        HH: String(date.getHours()).padStart(2, '0'),
        mm: String(date.getMinutes()).padStart(2, '0'),
        ss: String(date.getSeconds()).padStart(2, '0'),
    };

    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => map[match]);
}

function isWeekend(date) {
    if (!date instanceof Date) {
        throw new Error('Invalid date');
    }

    const day = date.getDay();
    return day === 0 || day === 6;
}


function daysBetween(date1, date2) {
    if (!date1 instanceof Date || date2 instanceof Date) {
        throw new Error('Invalid input');
    }

    const msInDay = 24 * 60 * 60 * 1000;
    const diffInMs = Math.abs(date2 - date1);
    return Math.floor(diffInMs / msInDay);
}

module.exports = { formatDate, isWeekend, daysBetween };
