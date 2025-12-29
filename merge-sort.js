// Array-Based

const mergeSortAB = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSortAB(arr.slice(0, mid));
  const right = mergeSortAB(arr.slice(mid));

  return mergeAB(left, right);
};

function mergeAB(left, right) {
  const result = [];

  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Index-Based

const mergeSortIB = (arr, low, high) => {
  if (low >= high) return;

  const mid = Math.floor((low + high) / 2);
  mergeSortIB(arr, low, mid);
  mergeSortIB(arr, mid + 1, high);
  mergeIB(arr, low, mid, high);
};

const mergeIB = (arr, low, mid, high) => {
  const temp = [];
  let i = low;
  let j = mid + 1;

  while (i <= mid && j <= high) {
    temp.push(arr[i] <= arr[j] ? arr[i++] : arr[j++]);
  }

  temp.push(...arr.slice(i, mid + 1));
  temp.push(...arr.slice(j, high + 1));

  for (let k = 0; k < temp.length; k++) {
    arr[low + k] = temp[k];
  }
};

console.log("Testing mergeAB");

console.log(mergeSortAB([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSortAB([105, 79, 100, 110]));

console.log("Testing mergeIB");

const arr1 = [5, 3, 8, 4];
mergeSortIB(arr1, 0, arr1.length - 1);
console.log(arr1);

const arr2 = [9, 7, 5, 3, 1];
mergeSortIB(arr2, 0, arr2.length - 1);
console.log(arr2);