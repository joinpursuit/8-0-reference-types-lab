/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */

// add store to stores

function addNewStore(stores, store) {
  stores.push(store);
  return stores
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */

// find index position
// remove store from position
// return mutated array

function removeStoreAtPosition(stores, index) {
  stores.splice(index, 1); // splice can be used to mutate an array. (index for input, 1 for amount of removed objects)
  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */

// find store inputted in array by name
// return duplicate store object

function duplicateStore(store) {
  // let newObj = {};
  // newObj.name = store.name;
  // newObj.boardGames = store.boardGames;
  // newObj.address = store.address;
    // let newObject = store;
  // return newObj;


  // const shop = {
  //   name: store.name,
  //   boardGames: store.boardGames,
  //   address: {
  //     street: store.address.street,
  //     city: store.address.city,
  //     state: store.address.state,
  //     zip: store.address.zip,
  //   }
  // }
  // return shop;


  // let newStore = JSON.parse(JSON.stringify(store)); // JSON is a multi-faceted function that does many things to make a copy of an object with the original key/value pairs and properties.
  // return newStore;

  const shop = {
    name: store.name,
    boardGames: store.boardGames.slice(),
    address: {
      street: store.address.street,
      city: store.address.city,
      state: store.address.state,
      zip: store.address.zip,
    },
  };
  return shop;
}

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
