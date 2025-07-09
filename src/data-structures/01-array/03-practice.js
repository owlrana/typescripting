/**
 * 🚀 Practice Problem – Array
 *
 * Find the largest element in an array.
 *
 * Complete the solve below.
 */
function solve(arr) {
    // TODO: implement
    if (arr.length === 0) {
        return -1; // Or throw an error, depending on the desired behavior for empty arrays
    }
    var largest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
/* ----------------- Test Data ----------------- */
if (require.main === module) {
    console.log('Sample:', solve);
}
/* ----------------- Solution ------------------ */
