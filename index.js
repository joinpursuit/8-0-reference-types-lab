/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  stores[stores.length]= store;
  return stores;
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  for(let i=0; i<stores.length; i++){
    if(i === index){
      stores.splice(i, 1);
    }
  }
  return stores;
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  let newStore={};
  newStore.name = store.name;
  newStore.boardGames = [];
  newStore.address= {};
  for(let i=0; i< store.boardGames.length; i++){
    newStore.boardGames[i]= store.boardGames[i];
  }
  newStore.address.street= store.address.street;
  newStore.address.city= store.address.city;
  newStore.address.state= store.address.state;
  newStore.address.zip= store.address.zip;
  return newStore;

}


module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
