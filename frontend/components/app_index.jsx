const React = require('react')
const ParkStore = require("../stores/park_store")
const ParkActions = require("../actions/park_actions")
const ParkMap = require("./park_map")
const ParkIndex = require("./park_index")

const AppIndex = React.createClass({
  getInitialState() {
    return {
      parks: ParkStore.all()
    }
  },
  componentDidMount() {
    ParkStore.addListener(this._handleChange)
    ParkActions.fetchAllParks()
  },
  _handleChange() {
    this.setState({
      parks: ParkStore.all()
    })
  },
  render() {
    return (
      <div>
        <ParkMap parks={this.state.parks}/>
        <ParkIndex parks={this.state.parks}/>
        {this.props.children}
      </div>
    )
  }

})

module.exports = AppIndex
