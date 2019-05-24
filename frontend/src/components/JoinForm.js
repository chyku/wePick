import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import firebase from '../utils/firebase-setup';



class JoinForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      name: ''
    };

    this.addUser = this.addUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addUser = (groupId, name) => {
    var myRef = firebase.database().ref().push();
    var key = myRef.key;
  
    firebase.database().ref('groups/' + groupId + '/users/').push({
      name: name,
      finished: false,
      is_admin: false
    })
    .then(() => {
      this.props.history.push('/select?group=' + groupId + '&user=' + key);
    })
    .catch( (e) => {
      console.log(e);
    })
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addUser(this.state.value, this.state.name);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <TextField
                id="outlined-search"
                label="Name"
                type="search"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange('name')}
                />
            <TextField
                id="outlined-search"
                label="Code"
                type="search"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange('value')}
                />
            <Button type="submit" variant="contained" color="secondary"  onClick={this.handlePayingClick}>
              Enter
            </Button>
          </label>
        </form>
      </div>
    );
  }
}

export default withRouter(JoinForm)
