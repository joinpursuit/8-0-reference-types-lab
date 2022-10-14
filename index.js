/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  //pushing new store object into stores array
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
 //removes store at given index. played with the splice tool until test passed.
//console.log(stores.splice(index, 1))
stores.splice(index, 1)
 return stores
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  //...spread syntax makes a SHALLOW copy of the given value from store array.
  let dupStore = {...store} 
  dupStore.boardGames = [...store.boardGames]
  dupStore.address = {...store.address}
  return dupStore;
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
