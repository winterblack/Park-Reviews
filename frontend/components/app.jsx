const React = require('react');
const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Park Reviews</h1>
        {this.props.children}
      </div>
    );
  }
});
module.exports = App;
