import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import firebase from '../utils/firebase-setup';
import Button from '@material-ui/core/Button';
import queryString from 'query-string';

class Finish extends Component {
    render() {
        return (
            <h1>Transaction Complete!</h1>
        );
    }
}

export default withRouter(Finish)
