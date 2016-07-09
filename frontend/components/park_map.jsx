const React = require('react');
const ReactDOM = require("react-dom")
const ParkStore = require("../stores/park_store")
const hashHistory = require("react-router").hashHistory

const mapOptions = {
  center: {lat: 37.75, lng: -122.44},
  zoom: 12
}

const ParkMap = React.createClass({
  componentDidMount() {
    const mapNode = ReactDOM.findDOMNode(this.refs.map)
    this.map = new google.maps.Map(mapNode, mapOptions)
    ParkStore.addListener(this._onChange)
  },
  _onChange() {
    const map = this.map
    const parks = ParkStore.all()
    parks.map( park => {
      let position = {lat: park.lat, lng: park.lng}
      let marker = new google.maps.Marker({
        position: position,
        map: map
      })
      marker.addListener("click", () => {
        hashHistory.push("parks/" + park.id)
      })
    })
  },
  render() {
    return (
      <div className="map" ref="map">Map</div>
    );
  }

});

module.exports = ParkMap;
