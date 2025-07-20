// --------------Bubble Sort-----------

var nums = [5, 2, 3, 1];
function BubbleSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
}

console.log(BubbleSort(nums));

// --------------Selection Sort-----------
var nums = [5, 2, 3, 1];
function SelectionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = nums[i];
      nums[i] = nums[minIndex];
      nums[minIndex] = temp;
    }
  }
  return nums;
}

console.log(SelectionSort(nums));

// --------------Insertion Sort-----------
var nums = [5, 2, 3, 1];
function InsertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let key = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = key;
  }
  return nums;
}

console.log(InsertionSort(nums));

// -------------QuickSort------------
// let arr = [8, 3, 1, 7, 0, 10, 2];

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));

// --------------Merge Sort-----------

// let arr = [8, 3, 1, 7, 0, 10, 2];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}

console.log(mergeSort(arr));

// ---------------2.Flat this Array-----------------------
const nested = [1, [2, [3, [4, 5]]], 6];

function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flattenArray(nested));

// -------------3.Frequency of Element--------------
// const arr = [1, 2, 2, 3, 4, 4, 4, 'a', 'a', true, true, false];

function Frequency(arr) {
  let element = {};
  for (let i = 0; i < arr.length; i++) {
    if (element[arr[i]]) {
      element[arr[i]]++;
    } else {
      element[arr[i]] = 1;
    }
  }
  return element;
}
console.log(Frequency(arr));

// -----------4.Count Distinct element--------------
// const arr = [1, 2, 2, 3, 4, 4, 4, 'a', 'a', true, false, true];

function CountDistinct(arr) {
  let element = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!element[arr[i]]) {
      element[arr[i]] = true;
      count++;
    }
  }
  return count;
}
console.log(CountDistinct(arr));

// -------------5.Repeating element----------------
// const arr = [1, 2, 2, 3, 4, 4, 4, 'a', 'a', true, false, true];

function Repeating(arr) {
  let element = {};
  let repeating = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (element[arr[i]]) {
      element[arr[i]]++;
    } else {
      element[arr[i]] = 1;
    }
  }

  for (let key in element) {
    if (element[key] > 1) {
      repeating.push(key);
    }
  }
  return repeating;
}
console.log(Repeating(arr));

// --------------6.Non-Repeating element----------------
// const arr = [1, 2, 2, 3, 4, 4, 4, 'a', 'a', true, false, true];

function NonRepeating(arr) {
  let element = {};
  let nonRepeating = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (element[arr[i]]) {
      element[arr[i]]++;
    } else {
      element[arr[i]] = 1;
    }
  }

  for (let key in element) {
    if (element[key] === 1) {
      nonRepeating.push(key);
    }
  }
  return nonRepeating;
}
console.log(NonRepeating(arr));

// --------------7.Non-Repeating element in String----------------
const str = "programming";

function NonRepeating(str) {
  let element = {};
  let nonRepeating = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (element[str[i]]) {
      element[str[i]]++;
    } else {
      element[str[i]] = 1;
    }
  }

  for (let char in element) {
    if (element[char] === 1) {
      nonRepeating.push(char);
    }
  }
  return nonRepeating;
}
console.log(NonRepeating(str));

// -----------8.Disjoint or Not---------------
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [3, 7, 8];

function Disjoint(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(Disjoint(a, c));

// -----------------9.Construct an object from a string-------------------

var path = "a.b.c.d.e";

var key = path.split(".");

var obj = {};
var current = obj;

for (let i = 0; i < key.length; i++) {
  current[key[i]] = i === key.length - 1 ? "" : {};
  current = current[key[i]];
}
console.log(obj);

// ----------------10.Binary Search---------------------

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1; // not found
}

// 11.Find Largest element in an array

// const arr = [10, 45, 2, 89, 33];

let lar = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > lar) {
    lar = arr[i];
  }
}
console.log(lar);

// 12.Find Second Smallest Element in an Array

const arr = [10, 3, 5, 1, 7, 1];

function secondSmallest(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else {
      if (num > smallest && num < secondSmallest) {
        secondSmallest = num;
      }
    }
  }
  return secondSmallest === Infinity ? null : secondSmallest;
}
console.log(secondSmallest(arr));

//13. Sort first half in ascending order and second half in descending
// const arr = [8, 3, 7, 1, 5, 6, 4, 2];

function SortAscDesc(arr) {
  let mid = Math.floor(arr.length / 2);

  let first = arr.slice(0, mid).sort((a, b) => a - b);
  let second = arr.slice(mid).sort((a, b) => b - a);

  return first.concat(second);
}

console.log(SortAscDesc(arr));

// 14. Sorting elements of an array by frequency
// const arr = [4, 5, 6, 5, 4, 3];
function SortWithFrequency(arr) {
  let element = {};

  for (let i = 0; i < arr.length; i++) {
    if (element[arr[i]]) {
      element[arr[i]]++;
    } else {
      element[arr[i]] = 1;
    }
  }

  arr.sort((a, b) => {
    let freqA = element[a];
    let freqB = element[b];

    if (freqA !== freqB) {
      return freqB - freqA;
    }
    return a - b;
  });
  return arr;
}
console.log(SortWithFrequency(arr));

//15. Complex flat array
const complexArray = [
  1,
  [2, [3, 4, [5, 6]], 7],
  {
    a: 8,
    b: [9, 10, { c: 11, d: [12, [13]] }],
  },
  [[[[14]]]],
  "text",
  [
    [
      { name: "Alice", hobbies: ["reading", ["coding", ["chess"]]] },
      [true, false],
    ],
  ],
];

function flatten(arr) {
  let stack = [...arr];
  let result = [];

  while (stack.length) {
    let current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
    } else if (current !== null && typeof current === "object") {
      stack.push(...Object.values(current));
    } else {
      result.push(current);
    }
  }
  return result.reverse();
}

//16. Finding the Longest Palindrome in an Array
const words = ["madam", "apple", "noon", "racecar", "banana"];

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
function longestPalindrome(arr) {
  let longest = "";
  for (let word of arr) {
    if (isPalindrome(word) && word.length > longest.length) {
      longest = word;
    }
  }
  return longest || null;
}

console.log(longestPalindrome(words));

//17. Summation of values
const dataObj = {
  value: 2,
  data: {
    value: 2,
    data: {
      value: 3,
    },
  },
};

function sumValues(obj) {
  if (!obj) return 0;

  let sum = obj.value || 0;
  if (obj.data) {
    sum += sumValues(obj.data);
  }
  return sum;
}
console.log(sumValues(dataObj));

// Counting the number of even and odd elements in an array
const numbers = [1, 2, 3, 4, 5, 6, 7];
function Count(arr) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return { even, odd };
}
console.log(Count(numbers));

// Replace each element of the array by its rank in the array
const input = [100, 20, 30, 20];

function rankArray(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  // console.log(sorted)
  let rankObj = {};
  let rank = 1;
  for (let i = 0; i < sorted.length; i++) {
    if (!rankObj[sorted[i]]) {
      rankObj[sorted[i]] = rank++;
    }
  }
  // console.log(rankObj)
  return arr.map((num) => rankObj[num]);
}
console.log(rankArray(input));

// Rotation of elements of array- left and right

function rotateLeft(arr, k) {
  return arr.slice(k).concat(arr.slice(0, k));
}
console.log(rotateLeft([1, 2, 3, 4, 5], 2));

// Find all Symmetric pairs in an array
// const input = [[1, 2], [3, 4], [5, 9], [4, 3], [9, 5]];

function findSymmetricPairs(pairs) {
  const map = new Map();
  const result = [];

  for (let [a, b] of pairs) {
    if (map.has(b) && map.get(b) === a) {
      result.push([b, a]);
    } else {
      map.set(a, b);
      console.log(map);
    }
  }

  return result;
}

// console.log(findSymmetricPairs(input));

// Merge overlapping intervals
function mergeInterval(interval) {
  interval.sort((a, b) => a[0] - b[0]);
  const merge = [interval[0]];
  for (let i = 1; i < interval.length; i++) {
    let last = merge[merge.length - 1];
    let start = interval[i];
    // console.log(start,last)

    if (start[0] <= last[1]) {
      last[1] = Math.max(last[1], start[1]);
    } else {
      merge.push(start);
    }
  }
  return merge;
}
console.log(
  mergeInterval([
    [1, 3],
    [8, 10],
    [15, 18],
    [2, 6],
  ])
);
