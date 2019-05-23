import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
 
class Main extends Component {
    constructor(props) {
        super(props);

        this.handlePayingClick = this.handlePayingClick.bind(this);
        this.handlePaidClick = this.handlePaidClick.bind(this);
    }

    handlePayingClick() {
        this.props.history.push('/join');
    }

    handlePaidClick() {
        this.props.history.push('/camera');
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="secondary" onClick={this.handlePaidClick}>
                    I paid
                </Button>
                <Button variant="contained" color="secondary"  onClick={this.handlePayingClick}>
                    I'm paying
                </Button>
            </div>
        );
    }
}

export default withRouter(Main);