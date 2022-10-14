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
stores.splice(index,1)
  return stores
}



/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  let storeDup = {};
  
//   let newArr = [];
// if (store.boardGames) {
//   newArr.push(boardGames)

  Object.assign(storeDup, store)
  if (store.boardGames) {
      store.boardGames = [] 
      if (store.address) {
        store.address = {}
      }
     }   // storeDup.games
     console.log(store);
  return storeDup
} 
//    return newArr;
// }



module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
