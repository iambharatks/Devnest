function is_array(item) {
  return typeof item == "object";
}
function array_Clone(item) {
  clone = JSON.parse(JSON.stringify(item));
  return clone;
}
function first(arr, n = 1) {
  let clone_arr = [];
  n = arr.length < n ? arr.length : n;
  for (let i = 0; i < n; i++) {
    clone_arr.push(arr[i]);
  }
  return clone_arr;
}
function join(arr) {
  new_string = "";
  for (str of arr) {
    new_string += str;
  }
  return new_string;
}
function frequency(arr) {
  let map = new Map();
  for (item of arr) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  let ans = -1;
  let max_fre = 0;
  for (let [key, value] of map.entries()) {
    if (value > max_fre) {
      ans = key;
      max_fre = value;
    }
  }
  return ans;
}
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

console.log(join(["Red", "Green", "White", "Black"]));

console.log(frequency([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
