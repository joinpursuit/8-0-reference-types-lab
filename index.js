/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  // to add a new store to end of list, we use push method
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
  // splice method removes at the given index position and 1 indicates how many items to remove
  
    stores.splice(index,1)
    
    return stores
}
/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  // method 1

let newObject = {}
let newBoardGames = []
let newAddress = {}
  let key;
  let key1
  let key2


      for(key in store)
      {
        newObject[key] = store[key]
      }

      for(key1 in store.boardgames)
      {
        newBoardGames[key1] = store.boardgames[key1]
      }
      
      for(key2 in store.address)
      {
        newAddress[key2] = store.address[key2]
      }

// method 2

 //newObject = {...store}
 //newBoardGames = {...store.boardgames}
 //newAddress = {...store.address}

// method 3

//newObject = Object.assign({},store)

return newObject
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
