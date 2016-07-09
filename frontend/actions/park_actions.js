const Dispatcher = require('../dispatcher');
const Constants = require('../constants');

const ParkActions = {
  fetchAllParks() {
    $.get('api/parks', ParkActions.receiveAllParks)
  },
  receiveAllParks(parks) {
    Dispatcher.dispatch({
      type: Constants.PARKS_RECEIVED,
      parks: parks
    });
  },
};

module.exports = ParkActions;
