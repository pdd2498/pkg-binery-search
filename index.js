const binarySearch = (a, t) => {
    let low = 0;
    let high = a.length - 1; // Adjusting high to be the index of the last element
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (a[mid] === t) return mid;
        else if (a[mid] > t) high = mid - 1;
        else low = mid + 1;
    }
    return -1; // If the element is not found, return -1
};

const binery = {
    binarySearch,
};

module.exports = binery;