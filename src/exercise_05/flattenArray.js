export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array == null || undefined) { throw new Error('Flatten undefined or null array'); }
  const stack = [...array];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    }
    else {
      res.push(next);
    }
  }
  return res.reverse();
}
