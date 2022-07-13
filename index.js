/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  stores.push(store)
  return stores
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {

  stores.splice(index, 1)
  return stores
// stores.shift(index)// removes front
  // stores.splice(index, stores.length-1)// removes end
  // an object within an array,
  // an index = numbber
  // returns the same stores array that was inputted.
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  let store2 = {...store}
  store2.boardGames = [...store.boardGames]
  store2.address = {...store.address}
  return store2
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
