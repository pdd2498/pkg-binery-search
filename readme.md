Certainly! Here's a README.md file for the provided binary search function:

---

# Binary Search Function

This is a JavaScript implementation of the binary search algorithm. Binary search is an efficient algorithm for finding the position of a target value within a sorted array.

## Usage

```javascript
const ut = require("pkg-binery-search");

const array = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;

const index = ut.binarySearch(array, target);
console.log("Index of target:", index);
```

## Function Signature

```javascript
const binarySearch = (array, target) => {
    // Implementation here
};
```

## Parameters

- `array`: A sorted array of elements. The binary search function assumes that the array is sorted in ascending order.
- `target`: The value to be searched in the array.

## Return Value

- If the target is found in the array, the function returns the index of the target.
- If the target is not found in the array, the function returns the index where the target should be inserted to maintain the sorted order.

## Example

For the given array `[1, 3, 5, 7, 9, 11, 13, 15]` and target `7`, the function will return `3`, as `7` is found at index `3` in the array.