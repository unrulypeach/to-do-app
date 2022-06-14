const module = ((name) => {
  let library = [];

  function addTask(obj){
    library.push(obj)
  }

  function returnLib(){
    return library
  }

  return {
    addTask,
    returnLib
  }
})();

export {module};