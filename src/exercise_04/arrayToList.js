export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array == null || undefined) { throw new Error('Creating list from undefined array'); }
  if (array.length === 0) { throw new Error('Creating list from empty array');}  
  esle { 
    List.value = list[0];
    list.next = list[1];
    list.next.next = list[2];
  }
}
 