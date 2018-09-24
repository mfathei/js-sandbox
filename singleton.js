/**
 * Singleton pattern
 */
const Singleton = (function () {
  let instance;

  function createInstance() {
    const obj = new Object({ name: 'Brad' });

    return obj;
  }

  function getInstance() {
    if (!instance) {
      instance = createInstance();
    }

    return instance;
  }

  return {
    getInstance: getInstance
  }
})();

// test singleton
const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA);
console.log(instanceB);
console.log(instanceA === instanceB);