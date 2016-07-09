const React = require('react')
const ParkMap = require("./park_map")
const ParkIndex = require("./park_index")
const AppIndex = require("./app_index")

const ParkShow = React.createClass({
  render: function() {
    return (
      <div className="parkShow">
        A picture of park {this.props.params.parkId} would go here.
      </div>
    )
  }
})

module.exports = ParkShow
