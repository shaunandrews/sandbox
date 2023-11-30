// dateHelpers.js (create this new file in your $lib directory)

export function getStartOfWeek(date) {
    const result = new Date(date);
    const day = result.getDay() || 7; // Get the day of the week (make Sunday's day number 7)
    if (day !== 1) { // If not Monday
        result.setHours(-24 * (day - 1)); // Set to previous Monday
    }
    return result;
}
