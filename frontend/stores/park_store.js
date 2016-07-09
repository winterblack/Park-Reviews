const Store = require('flux/utils').Store
const Constants = require('../constants')
const Dispatcher = require('../dispatcher')
const ParkStore = new Store(Dispatcher)
let _parks = []

ParkStore.all = function(){
  return _parks.slice()
}
function resetAllParks(parks){
  _parks = parks
  ParkStore.__emitChange()
}
ParkStore.__onDispatch = function(action) {
  switch(action.type) {
    case Constants.PARKS_RECEIVED: resetAllParks(action.parks); break;
  }
}

module.exports = ParkStore
