/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  // Add a new store to the end of the original object
  // return the original object with the new store in it.
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

  return stores // 

}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {


  const gameStop = Object.assign({}, store)
  const addressGameStop = Object.assign({}, store.address)
  gameStop.address = addressGameStop

  // const boardGames = Object.assign({},store.boardGames)
  // gameStop.boardGames = boardGames

  const boardGames = store.boardGames.slice();  
  gameStop.boardGames = boardGames


  // for(let i = 0; i < gameStop.length; i++) {
  //   gameStop[i] = store[i];
  // } 

    return gameStop

}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
