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
  stores.splice(index,1);
  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  /* iterative solution */

  let storeCopy = {};
  for (let key in store){
    if (typeof store[key] == 'object'){
      if (Array.isArray(store[key])){
        storeCopy[key] = [];
        for (let element of store[key]){
          storeCopy[key].push(element);
        }
      }else{
        storeCopy[key] = {};
        for (let key2 in store[key]){
          storeCopy[key][key2] = store[key][key2];
        }
      }
    }else{
      storeCopy[key] = store[key];
    }
  }
 
 
  /* second solution -- definitely the easiest and clear winner!
  let storeCopy = JSON.parse(JSON.stringify(store));
  */

  /* first solution
  const storeCopy = Object.assign({}, store);
  storeCopy.boardGames = Object.assign([], store.boardGames);
  storeCopy.address = Object.assign({}, store.address);
  */
  return storeCopy;
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
