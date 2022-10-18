/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  // pushing the values of the "stores" array to the empty array "store"
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
  // remove value from given index and changing the original array "stores"
  stores.splice(index, 1);
  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  // empty object
  let duplicated = {};
  // assigning the same key and value
  duplicated.name = store.name;

  // empty array
  duplicated.boardGames = [];
  for (let i=0; i<store.boardGames.length; i++) {
    // assigning the same array
    duplicated.boardGames[i] = store.boardGames[i];
  }

  duplicated.address = {};
  duplicated.address.street = store.address.street;
  duplicated.address.city = store.address.city;
  duplicated.address.state = store.address.state;
  duplicated.address.zip = store.address.zip;
  return duplicated;
}


module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
