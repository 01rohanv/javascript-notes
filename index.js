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
