/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  // Add a new store to the end of the original object
  // return the original object with the new store in it.
  stores.push(store) // Adding a new object to the end of the original object

  return stores

}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {

    stores.splice(index, 1) //remove a store object based on the given index. Removing 1

  return stores // 

}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {


  const gameStop = Object.assign({}, store) // duplicate the original 'store' object
  const addressGameStop = Object.assign({}, store.address) // create a new object for the store's key address
  gameStop.address = addressGameStop // reassign the gameStop's key to the new object with the store's key address

  const boardGames = store.boardGames.slice();  //create a new array for the store's array boardGames
  gameStop.boardGames = boardGames // reassign the gameStop's boardGame key to the new array with the store's boardGames key


    return gameStop // return the duplicated store object that is not shared with the inputted 'store'

}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
