/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  //push store to end of stores array
  stores.push(store);
  //return the original array
  return stores;
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  //remove the store at a specific index
  stores.splice(index, 1)
  //return the stores array
  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  //create a new object
  let dupeStore = {}
  //set its values equal to the original stores values
  dupeStore.name = store.name
  //create an array for boardgames
  dupeStore.boardGames = []
  //go through the board games array and copy each element
  for (let i = 0; i < store.boardGames.length; i++){
    dupeStore.boardGames[i] = store.boardGames[i]
  }
  //make an object for address
  dupeStore.address = {}
  //copy all the address keys and values
  dupeStore.address.street = store.address.street
  dupeStore.address.city = store.address.city
  dupeStore.address.state = store.address.state
  dupeStore.address.zip = store.address.zip
  //return new object
  return dupeStore
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
