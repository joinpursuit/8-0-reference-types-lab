/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
//Adding store object into the end of stores array.
function addNewStore(stores, store) {
  stores.push(store)
  
  return stores
};

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  stores.splice(index, 1)

  return stores
}
  
  
   


/**
 * Creates a duplicate of    `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
 
 let copyOfStore = { ...store};
 copyOfStore.boardGames = [...store.boardGames]

 copyOfStore.address = {...store.address}
//console.log(copyOfStore)
return copyOfStore
};













module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
