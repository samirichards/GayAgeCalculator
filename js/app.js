// Keep all the business logic in here
import { differenceInYears } from 'https://cdn.skypack.dev/date-fns@2.22.1?min';

export function calculateGayAge(straightAge) {
    if (straightAge <= 18) {
        return straightAge - (18 - Math.round(1 / (1 + Math.exp(-straightAge + 18))));
    } else {
        return straightAge + (straightAge - 18) * 0.5;
    }
}

export function calculateGayAgeNormalScale(straightAge) {
    if (straightAge <= 18) {
        return (straightAge - (18 - straightAge) ** 2);
    } else {
        return (straightAge + (straightAge - 18) * 0.5);
    }
}

export function calculateGayAgeCFWMScale(straightAge) {
    if (straightAge <= 18) {
        return (straightAge - (18 - straightAge) ** 2);
    } else {
        return (18 + (straightAge - 18) * 4);
    }
}

export function calculateYearsSince(date) {
    const currentDate = new Date();
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // accounting for leap years

    const timeDiff = currentDate - date;
    const years = timeDiff / millisecondsPerYear;

    // Rounding to two decimal places
    const roundedYears = Math.round(years * 100) / 100;

    return roundedYears;
}

export function calculateYearsSinceNew(date) {
    const currentDate = new Date();
    const yearsSince = differenceInYears(currentDate, date);
    return yearsSince.toFixed(2);
}