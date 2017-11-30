import React, { Component } from 'react';
import Home from './Home'
import About from './About'
import Topics from './Topics'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/topics/baseball">Baseball</Link></li>
              <li><Link to="/topics/pokemon">Pokemon</Link></li>
            </ul>

            <hr/>

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/topics/:subject" component={Topics}/>
              <Route path="*" component={Topics}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
