const React = require('react')
const ParkMap = require("./park_map")

const ParkIndex = React.createClass({
  render() {
    return (
      <div>
        <ul>
          {this.props.parks.map( park => {
            return<li key={park.id}>{park.description}</li>
          })}
        </ul>
      </div>
    )
  }
})

module.exports = ParkIndex
