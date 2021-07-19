/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  //using .push, it mutates the array instead of reference
  stores.push(store);
  // return the store array
  return stores;
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  //use delete or splice to mutate instead of reference
  stores.splice(index, 1);
  // return the stores array
  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  // Used Object.assign to create a non-reference copy,
  let copy = Object.assign({}, store);
  //Looping through the object values to account for edge cases
  for (const key in copy) {
    // if the value is an Array, create a non-referenced clone, and replace it
    if (copy[key].constructor === Array){
      copy[key] = copy[key].slice(0);
    // if the value is an Object, do the same
    } else if (copy[key].constructor === Object){
      copy[key] = Object.assign({}, copy[key]);
    }
  }
  // return our copied Object, free of references
    return copy;
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
