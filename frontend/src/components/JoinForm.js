import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { setGroupId, addUser } from '../redux/actions/types'
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      setGroupId,
      addUser
    },
    dispatch
  )
}

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
    this.props.history.push('/select');
    const groupId = setGroupId(this.state.value);
    const userId = addUser(this.state.value, "Welch");
    console.log(groupId);
    console.log(userId);
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

export default connect(
  mapDispatchToProps
)(withRouter(JoinForm))
