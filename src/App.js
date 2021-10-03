
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routes/routes'
import Nav from './components/Nav'
import './App.css'
class App extends Component {
  handRoutes = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
        )
      })
    }
    return <Switch>{result}</Switch>;
  }
  render() {
    return (
      <Router>
        <Nav />
        {this.handRoutes(routes)}
      </Router>
    );
  }
}

export default App;