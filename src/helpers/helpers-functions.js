export function rearrangeArray(startIndex, array) {
  if (startIndex < 0 || startIndex >= array.length)
    throw new Error("Invalid start index");
  return array.slice(startIndex).concat(array.slice(0, startIndex));
}

export function filterArray(itemToRemove, array) {
  return array.filter((item) => item !== itemToRemove);
}
