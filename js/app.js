const { differenceInYears } = require('date-fns');

function calculateGayAge(straightAge) {
    if (straightAge <= 18) {
        return straightAge - (18 - Math.round(1 / (1 + Math.exp(-straightAge + 18))));
    } else {
        return straightAge + (straightAge - 18) * 0.5;
    }
}

function calculateYearsSince(date) {
    const currentDate = new Date();
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // accounting for leap years

    const timeDiff = currentDate - date;
    const years = timeDiff / millisecondsPerYear;

    // Rounding to two decimal places
    const roundedYears = Math.round(years * 100) / 100;

    return roundedYears;
}

function calculateYearsSinceNew(date) {
    const currentDate = new Date();
    const yearsSince = differenceInYears(currentDate, date);
    return yearsSince.toFixed(2);
}

function testCalculateAgeOnClick(){

}