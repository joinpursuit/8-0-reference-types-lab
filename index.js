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

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  // Use .splice method to remove a an element (a store at a given position (index). This is modifying the original array (destructive)
let newStores = stores.splice(index, 1)
  return stores
} 

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  // Fancy Method 
  // In order to create a DEEP copy of an array, use the JSON method. All the values in the newStore object are disconnected from the original store object.
// let newStore = JSON.parse(JSON.stringify(store))

// Alternative Method 
let newStore = {}
  for(let keys in store){

    if(Array.isArray(store[keys])){
      newStore[keys] = []
      for(let item of store[keys]){
        newStore[keys].push(item)
      }
    } else if(typeof store[keys] === 'object'){
      newStore[keys] = {}

      keyValueArray = Object.entries(store[keys])
      for (let [newKey,newValue] of keyValueArray) {
        newStore[keys][newKey] = newValue
      }
  
    }else{
      newStore[keys] = store[keys]
    }
  }
  return newStore
}


module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
