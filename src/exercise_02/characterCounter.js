export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  if (string == null || undefined) { return 0; }
  if (string === '') { return 0; }
  if (prediction !== null) {
    const count = 0;
    if (string.indexOf(prediction) !== -1) { 
      count++;
      countCharacter(string.substring(string.indexOf(prediction) + prediction.length()), prediction);
      return count; }
    
    return string.length;
  } 
}