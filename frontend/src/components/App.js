import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import CameraPage from './CameraPage';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router forceRefresh={true}>
            <div className="App">
                <Route exact path="/" component={Main} />
                <Route path="/camera" component={CameraPage} />
            </div>
        </Router>
    );
  }
}

export default App;
