export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  const array = [];
  if (start = end) {return '[]';}
  for (start; start < end; start++) {
    array.push(start);
    return array;
  }
  for (start; start > end; start--) {
    array.push(start);
    return array;
  }
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
   const s = 0;
   for (const i = 0; i < sum.length; i++){ s = s + sum[i];}
   return s;
}
