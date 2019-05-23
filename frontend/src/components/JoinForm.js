import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Button from '@material-ui/core/Button';

class JoinForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
    this.props.history.push('/submitted');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
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

export default withRouter(JoinForm);
