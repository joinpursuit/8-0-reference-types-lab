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
// we are not sure weather push will work for an object with many 


/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */

//  ✕ it should remove the store at the given position in the array (8 ms)
//  ✕ it should return the original array (1 ms)
//  ✕ it should remove a store from the front of the array (4 ms)
//  ✕ it should remove a store from the end of the array (2 ms)


function removeStoreAtPosition(stores, index) {
  
stores.splice(index,1)
return stores
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */

function duplicateStore(store) {

  let stores = {
    store
  }
  let storeCopy = Object.assign({}, store )
  let arrBoardGame = store.boardGames = [];
  let storeAddress = store.address = {};

  return storeCopy
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
0