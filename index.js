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
  stores.splice(index, 1);
  return stores
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */

/**
 * Polya's Method
 * 
 * 1. Understand
 *    - Key Terms: Object, duplicate, no shared references
 *    - Inputs: {Object}
 *    - Outputs: {duplicateObject}
 *    - Clarifying Questions: 
 *        1. What is the purspose for the duplicate object?
 *    - Does the Output Answer the Question: Yes
 * 
 * 2. Plan
 *    - Logical Paths:
 *        1. The properties of the original object are to be copied into a new empty object which will become the duplicate.
 *    - Coding Paths:
 *        1. Use a "for...in" loop to interate through the main object properties and copy them into a new empty object that will be the duplicate.
 *        2. The array for boardgames and the object for address must also be duplicated in order to  avoid shared internal references
 * 3. Solve
 *    - Method: Pattern Recognition, Drawing a Model
 *    - Efficiency of Method: Gets the job done but it less efficient then using JSON to stringify and then parse
 * 
 * 4. Reflect
 *    - Check for Correctness: True
 *    - Refactor:
 */

function duplicateStore(store) {
  const dupStore = {};
  let storeBoardGamesArray = store.boardGames;
  let dupBoardGamesArray = [];
  let storeAddresObj = store.address;
  let dupAddressObj = {};

  for (keys in store) {
    dupStore[keys] = store[keys];
  }
  // Creates an exact duplicate object called dupStore as the original store object except that the internal boardGames array and address object are shared references bewteen dupStore and store

  for (keys in storeAddresObj) {
    dupAddressObj[keys] = storeAddresObj[keys];
  }
  dupStore.address = dupAddressObj;
  // Creates a duplicate of the originalboardGames array to be copied into dupStore to avoid shared references

  for (let boardGame of storeBoardGamesArray) {
    dupBoardGamesArray.push(boardGame);
  }
  dupStore.boardGames = dupBoardGamesArray;
 // Creates a duplicate of the original address object to be copied into dupStore to avoid shared references

  return dupStore;
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
