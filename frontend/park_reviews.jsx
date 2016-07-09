//React
const React = require('react')
const ReactDOM = require('react-dom')
//Router
const ReactRouter = require('react-router')
const Router = ReactRouter.Router
const Route = ReactRouter.Route
const IndexRedirect = ReactRouter.IndexRedirect
const hashHistory = ReactRouter.hashHistory
//Components
const App = require('./components/app')
const AppIndex = require("./components/app_index")
const ParkShow = require("./components/park_show")
const ParkIndex = require("./components/park_index")

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRedirect to="/parks"/>
      <Route path="parks" component={ AppIndex }>
        <Route path=":parkId" component={ ParkShow }/>
      </Route>
    </Route>
  </Router>
)

$(document).ready(function() {
  const root = document.getElementById('root')
  ReactDOM.render(appRouter, root)
})

window.ParkStore = require("./stores/park_store")
window.ParkActions = require("./actions/park_actions")
