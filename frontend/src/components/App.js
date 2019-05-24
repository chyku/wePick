import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import CameraPage from './CameraPage';
import JoinForm from './JoinForm';
import Finish from './finish';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ItemList from './ItemList';

class App extends Component {
  render() {
    return (
        <Router forceRefresh={true}>
            <div className="App">
                <Route exact path="/" component={Main} />
                <Route path="/camera" component={CameraPage} />
                <Route path="/join" component={JoinForm} />
                <Route path="/select" component={ItemList} />
                <Route path="/complete" component={Finish} />
            </div>
        </Router>
    );
  }
}

export default App;
