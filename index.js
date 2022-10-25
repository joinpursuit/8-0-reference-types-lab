/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  stores.push(store)
  return(stores)
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  stores.splice(index , 1)//at index "index", remove 1 element and move to a new array.
  return(stores)
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  //create a new object
  let newStore = {}
  //set its values equal to the original stores values
newStore.name = store.name
//create an array for boardGames
newStore.boardGames = []
//go through the board games array and copy each element
for (let i = 0; i < store.boardGames.length; i++){
  newStore.boardGames[i] = store.boardGames[i]
}
//make an object for address
newStore.address = {}
newStore.address.street = store.address.street
newStore.address.city = store.address.city
newStore.address.state = store.address.state
newStore.address.zip = store.address.zip
// return 
return newStore
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
