/**
 * OBJECTIVE: Adds a new store to the very end of the list.
 * TODO: add a new store (Object)
 * returns an array of objects
 * 
 * 
 * 
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
  let newStore = {};
  for(let key in store){
    if(Array.isArray(store[key])){
    newStore.boardGames = store.boardGames.slice();
    } else {
      newStore[key] = store[key];
    }
  }
  newStore.address = {};
  Object.assign(newStore.address, store.address);
  return newStore; 
}
module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
