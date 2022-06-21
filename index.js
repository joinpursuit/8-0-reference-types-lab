/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  stores.push(store);
  return stores;
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  stores.splice(index, 1);
  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  // Create new objects for reference types
  let storeCopy = {};
  let boardGamesArrayCopy = [];
  let addressObjectCopy = {};

  // Add values of store.boardGames array to boardGamesArrayCopy
  for (let boardGame of store.boardGames) {
    boardGamesArrayCopy.push(boardGame);
  }
  // Add values in store.address object to addressObjectCopy
  for (let key in store.address) {
    addressObjectCopy[key] = store.address[key];
  }

  // Add non-referenced values to storeCopy
  storeCopy.name = store.name; // creates a copy of the name value, not a reference to it since strings are primitive
  storeCopy.boardGames = boardGamesArrayCopy;
  storeCopy.address = addressObjectCopy;

  // This solution did not work alone because the boardGames array and address object
  // when assigned to storeCopy, the reference to the same object is passed instead of a copy of the object.
  // a copy had to be made manually.
  // for (let key in store) {
  //   storeCopy[key] = store[key];
  // }
  return storeCopy;
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
